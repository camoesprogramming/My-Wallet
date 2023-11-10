import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataType } from "./DataViewer";

export default function FinancialRecord(data: DataType) {
  
  return (
    <StyledData color={data.income === true ? "#03AC00" : "#C70000"}>
      <p>
        <span>{data.date}</span> {data.description}
      </p>
      <div>
        <p>{data.value.replace(".", ",")}</p>
        <FontAwesomeIcon
          icon={faXmark}
          size="2xs"
          style={{ color: "#000000" }}
        />
      </div>
    </StyledData>
  );
}

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
