import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

export default function DataViewer() {
  const { token } = useContext(TokenAndNameContext);
  const link = `${baseUrl}financial-records`;
  const [data, setData] = useState<DataType[] | undefined>(undefined);
  const navigate = useNavigate();
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
          setData([]);
        } else {
          alert(err.response.data);
          navigate("/");
        }
      });
  }, []);

  return (
    <Container justify={data?.length !== 0 ? "start" : "center"}>
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
