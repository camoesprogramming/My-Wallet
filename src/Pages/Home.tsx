import styled from "styled-components";
import HomeHeader from "../Components/HomeHeader";
import DataViewer from "../Components/DataViewer";
import NewRecordCard from "../Components/NewRecordCard";
import { Link } from "react-router-dom";

export default function Home() {
  
  return (
    <>
      <HomeHeader />
      <DataViewer />
      <Container>
        <Link to="/new-income">
          <NewRecordCard addIncome={true} />
        </Link>
        <Link to="/new-expense">
          <NewRecordCard addIncome={false} />
        </Link>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-top: 13px;
  a {
    background-color: #A328D6;
    width: 45%;
    border-radius: 5px;
  }
`;
