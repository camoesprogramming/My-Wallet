import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

type Data = {
  date: string;
  description: string;
  value: string;
  income: string;
  id: string;
};

export default function DataViewer() {
  let DataExample: Data[] = [
    {
      date: "30/11",
      description: "Almoço com mãe",
      value: "45.90",
      income: "false",
      id: "1",
    },
    {
      date: "02/12",
      description: "Compras de supermercado",
      value: "120.50",
      income: "true",
      id: "2",
    },
    {
      date: "15/12",
      description: "Jantar com amigos",
      value: "75.00",
      income: "false",
      id: "3",
    },
    {
      date: "20/12",
      description: "Gasolina",
      value: "60.30",
      income: "true",
      id: "4",
    },
    {
      date: "25/12",
      description: "Presentes de Natal",
      value: "200.00",
      income: "false",
      id: "5",
    },
  ];

  return (
    <Container justify={DataExample ? "start" : "center"}>
      {!DataExample && <h1>Não há registros de entrada ou saída</h1>}

      {DataExample.map((e) => (
        <StyledData
          color={e.income === "true" ? "#03AC00" : "#C70000"}
          key={e.id}
        >
          <p>
            <span>{e.date}</span> {e.description}
          </p>
          <div>
            <p>{e.value.replace(".", ",")}</p>
            <FontAwesomeIcon icon={faXmark} size="2xs" style={{color: "#000000"}} />
          </div>
        </StyledData>
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
