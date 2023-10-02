import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";



export default function EntryCard({add} : {add: boolean}) {
  return (
    <ContainerCard>
      <div>
        <FontAwesomeIcon
          icon={add === true ? faCirclePlus : faCircleMinus}
          size="2xl"
          style={{ color: "#ffffff" }}
        />
        
      </div>
      <h1>Nova<br />{add === true ? "Entrada" : "Saída"}</h1>
    </ContainerCard>
  );
}

const ContainerCard = styled.div`
  width: 45%;
  height: 16vh;
  background-color: #a328d6;
  border-radius: 5px;
  padding-top: 11px;
  padding-left: 10px;
  padding-bottom: 9px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  div {
    background-color: #a328d6;
  }

  h1 {
    background-color: #a328d6;
    font-family: 'Raleway';
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }

`;
