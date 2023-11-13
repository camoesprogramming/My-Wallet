import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DataType } from "./DataViewer";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";
import { useContext, useState } from "react";
type FinancialRecordProps = {
  id: string;
  income: boolean;
  value: string;
  description: string;
  date: string;
  setDeletedRecord: (id:string) => void;

}

export default function FinancialRecord({id, income, value, description, date, setDeletedRecord}: FinancialRecordProps) {
  const { token } = useContext(TokenAndNameContext);
  const [deleted, setDeleted] = useState<Boolean>(false);

  function deleteFinancialRecord() {
    const link = `${baseUrl}financial-records/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    
    const promise = axios.delete(link, config);
    promise
      .then((response) => {
        if (response.status === 200) {
          setDeleted(true);
          setDeletedRecord(id)
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }
  return (
    <>
      {!deleted && (
        <StyledData color={income === true ? "#03AC00" : "#C70000"}>
          <p>
            <span>{date}</span> {description}
          </p>
          <div>
            <p>{value.replace(".", ",")}</p>
            <FontAwesomeIcon
              icon={faXmark}
              size="2xs"
              style={{ color: "#000000" }}
              onClick={deleteFinancialRecord}
            />
          </div>
        </StyledData>
      )}
    </>
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
