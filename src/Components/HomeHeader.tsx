import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";
import { baseUrl } from "../Constants/url";
import axios from "axios";

export default function HomeHeader() {
  const { name, token } = useContext(TokenAndNameContext);
  const navigate = useNavigate();

  function killSession() {
    let link = `${baseUrl}logout`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.delete(link, config);
    promise.then((response) => navigate("/")).catch();
  }

  return (
    <Container>
      <h1>Olá, {name}!</h1>
      <FontAwesomeIcon
        icon={faRightFromBracket}
        size="2xl"
        style={{ color: "#ffffff" }}
        onClick={killSession}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

  h1 {
    font-family: "Raleway";
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
