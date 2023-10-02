import styled from "styled-components";
import HomeHeader from "../Components/HomeHeader";
import DataViewer from "../Components/DataViewer";
import EntryCard from "../Components/EntryCard";

export default function Home() {
  
  return (
    <>
      <HomeHeader />
      <DataViewer />
      <Container>
        <EntryCard add = {true}/>
        <EntryCard add = {false}/>
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
`;
