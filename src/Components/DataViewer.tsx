import styled from "styled-components";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import FinancialRecord from "./FinancialRecord";
import { useNavigate } from "react-router-dom";

export type DataType = {
  id: string;
  income: boolean;
  value: string;
  description: string;
  date: string;
};

type ResultType = {
  result: number;
  color: "#03AC00" | "#C70000" | "#000000" | undefined;
};

export default function DataViewer() {
  const { token } = useContext(TokenAndNameContext);
  const link = `${baseUrl}financial-records`;
  const [data, setData] = useState<DataType[] | undefined>(undefined);
  const [result, setResult] = useState<ResultType | undefined>(undefined);
  const [deletedRecord, setDeletedRecord] = useState<string>("");
  const navigate = useNavigate();

  function calculateTotalValue(array: DataType[] | []): ResultType {
    let sumIncome = 0;
    let sumExpense = 0;
    let result = 0;
    let color: "#03AC00" | "#C70000" | "#000000" | undefined = undefined;
    if (array.length === 0) {
      return {
        result,
        color: "#000000",
      };
    }

    for (let i = 0; i < array.length; i++) {
      if (array[i].income === true) {
        sumIncome += parseFloat(array[i].value);
      } else {
        sumExpense += parseFloat(array[i].value);
      }
    }
    if (sumIncome > sumExpense) {
      result = sumIncome - sumExpense;
      color = "#03AC00";
    } else {
      result = sumExpense - sumIncome;
      color = "#C70000";
    }

    return {
      result: parseFloat(result.toFixed(2)),
      color: color,
    };
  }

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(link, config);
    promise
      .then((res) => {
        setData(res.data);
        setResult(calculateTotalValue(res.data));
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setData([]);
          setResult(calculateTotalValue([]));
        } else {
          alert(err.response.data);
          navigate("/");
        }
      });
  }, []);

  useEffect(() => {
    if (deletedRecord === "") return;
    let newData = data?.filter((item) => item.id !== deletedRecord);
    setData(newData);

    if (newData !== undefined) {
      setResult(calculateTotalValue(newData));
    }
  }, [deletedRecord]);

  return (
    <Container
      color={result?.color}
      justify={data?.length !== 0 ? "start" : "center"}
    >
      {data?.length === 0 && <h1>Não há registros de entrada ou saída</h1>}

      {data?.map((e) => (
        <FinancialRecord
          key={e.id}
          id={e.id}
          income={e.income}
          value={e.value}
          description={e.description}
          date={e.date}
          setDeletedRecord={setDeletedRecord}
        ></FinancialRecord>
      ))}
      <section>
        <h2>Saldo</h2>
        <h3>R$ {String(result?.result).replace(".", ",")}</h3>
      </section>
    </Container>
  );
}

const Container = styled.div<{ justify: string; color?: string }>`
  margin: auto;
  margin-top: 28px;
  width: 90%;
  height: 66vh;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: center;

  h1,
  h2,
  h3 {
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    background-color: #fff;
  }

  h2 {
    font-weight: bold;
  }

  h3 {
    font-size: 17px;
    color: ${(props) => props.color};
  }
  section {
    display: flex;
    background-color: #fff;
    width: 95%;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
  }
  
  
`;
