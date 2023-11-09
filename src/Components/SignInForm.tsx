import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";
import { baseUrl } from "../Constants/url";

type userInfo = {
  email: string;
  password: string;
};

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setToken, setName } = useContext(TokenAndNameContext);
  const [alertError, setAlertError] = useState<Boolean>(false);
  const [alertConnection, setAlertConnection] = useState<Boolean>(false);

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const userData: userInfo = {
      email: email,
      password: password,
    };

    const link = `${baseUrl}sign-in`;

    const promise = axios.post(link, userData);
    promise
      .then((response) => {
        setToken(response.data.token);
        setName(response.data.name);
        navigate("/home");
      })
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          setAlertError(true);
        } else {
          setAlertConnection(true);
        }
      });
  }
  return (
    <FormContainer onSubmit={handleLogin}>
      <input
        type="text"
        name="email"
        value={email}
        placeholder="E-mail"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Senha"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      {alertError && <p>E-mail ou senha incorretos!</p>}
      {alertConnection && <p>Erro de conexão com o servidor</p>}
      <button>Entrar</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #8c1cbe;
  width: 80%;

  input,
  button {
    width: 100%;
    height: 58px;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    box-sizing: border-box;
  }

  input {
    margin-bottom: 13px;
    padding-left: 15px;
  }

  button {
    background-color: #a328d6;
    color: #f9f9f9;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    border: none;
    height: 46px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  p {
    color: #ff0000;
    margin-top: 0px;
    margin-bottom: 10px;
  }
`;
