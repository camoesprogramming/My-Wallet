import { useEffect, useState } from "react";
import styled from "styled-components";

type Data = {
  date: string,
  description: string,
  value: number,
  type: string
}

export default function DataViewer() {

  

  let DataExample: Data[] = [
    {
      date:"30/11",
      description: "Almoço com mãe",
      value: 45.90,
      type:"saida"
    },
    {
      date: "02/12",
      description: "Compras de supermercado",
      value: 120.50,
      type:"entrada",
    },
    {
      date: "15/12",
      description: "Jantar com amigos",
      value: 75.00,
      type:"saida"
    },
    {
      date: "20/12",
      description: "Gasolina",
      value: 60.30, 
      type:"entrada"
    },    
    {
      date: "25/12",
      description: "Presentes de Natal",
      value: 200.00,
      type:"saida"
    }
  ] 


  return (
    <Container justify= {DataExample ? "start" : "center"}>
      {!DataExample && (
        <h1>Não há registros de entrada ou saída</h1>
      ) 
      }
      
      
      {DataExample.map((e) => (
        <StyledData color={e.type === "entrada" ? "#03AC00" : "#C70000" } key={e.date}>
          <p><span>{e.date}</span> {e.description}</p>
          <p>{e.value}</p>
        </StyledData>
      ))}
      

    </Container>
  );
}

const Container = styled.div<{justify: string}>`
  margin: auto;
  margin-top: 28px;
  width: 90%;
  height: 66vh;
  background-color: #fff;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify};
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

const StyledData = styled.div<{color: string}>`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  background-color: #fff;
  margin-top: 12px;
  
  p {
    font-family: 'Raleway';
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    background-color: #fff;
  }

  span {
    color: #C6C6C6;
    background-color: #fff;
    padding-right: 20px;
  }
 
  p:last-of-type {
    color: ${props => (props.color)};
  }

`
