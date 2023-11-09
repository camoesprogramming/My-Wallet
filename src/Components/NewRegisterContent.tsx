import styled from "styled-components";
import RegisterContentForm from "./RegisterContentForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function NewRegisterContent({ income }: { income: boolean }) {
  return (
    <Container>
      <div>
        <h1>New {income === true ? "Income" : "Expense"}</h1>
        <Link to="/home">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="2xl"
            style={{ color: "#ffffff" }}
          />
        </Link>
      </div>
      <RegisterContentForm income={income} />
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 25px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
  }
`;
