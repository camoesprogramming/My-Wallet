import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import FinancialRecord from "./FinancialRecord";

export type DataType = {
  id: string;
  income: string;
  value: string;
  description: string;
  date: string;
};

export default function DataViewer() {
  const { token } = useContext(TokenAndNameContext);
  const link = `${baseUrl}financial-records`;
  const [data, setData] = useState<DataType[] | undefined>(undefined);

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
      })
      .catch((err) => {
        if (err.response.status === 404) {
          setData([])
        }
        alert("Erro ao conectar com o servidor: \n" + err);
      });
  }, []);

  return (
    <Container justify={data?.length !== 0  ? "start" : "center"}>
      {data?.length === 0 && <h1>Não há registros de entrada ou saída</h1>}

      {data?.map((e) => (
        <FinancialRecord key={e.id} {...e}></FinancialRecord>
      ))}
    </Container>
  );
}

const Container = styled.div<{ justify: string }>`
  margin: auto;
  margin-top: 28px;
  width: 90%;
  height: 66vh;
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justify};
  align-items: center;

  h1 {
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    background-color: #fff;
  }
`;

const StyledData = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  background-color: #fff;
  margin-top: 12px;

  p {
    font-family: "Raleway";
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    background-color: #fff;
  }

  span {
    color: #c6c6c6;
    background-color: #fff;
    padding-right: 20px;
  }

  div {
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: ${(props) => props.color};
      margin-right: 8px;
    }
  }
`;
