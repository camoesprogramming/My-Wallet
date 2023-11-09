import styled from "styled-components";
import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from "../Constants/url";
import { useNavigate } from "react-router-dom";

export default function SignUpForm() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const [emptyFields, setEmptyFields] = useState<Boolean>(false);
  const [samePassword, setSamePassword] = useState<Boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<Boolean>(false);
  const [invalidConnection, setInvalidConnection] = useState<Boolean>(false);
  const [nonValidField, setNonValidField] = useState<Boolean>(false);
  const navigate = useNavigate();

  function handleFormSignUp(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    setInvalidEmail(false);
    setInvalidConnection(false);
    setEmptyFields(false);
    setSamePassword(false);
    setNonValidField(false);

    const data = {
      name,
      email,
      password,
      repeatPassword,
    };

    if (Object.values(data).some((value) => !value)) {
      setEmptyFields(true);
      return;
    }

    if (data.repeatPassword !== data.password) {
      setSamePassword(true);
      return;
    }

    const link = `${baseUrl}sign-up`;

    const promise = axios.post(link, data);

    promise
      .then((response) => navigate("/"))
      .catch((error) => {
        if (error.response && error.response.status === 422) {
          setNonValidField(true);
        } else if (error.response && error.response.status === 409) {
          setInvalidEmail(true);
        } else {
          setInvalidConnection(true);
        }
        console.log(error)
      });
  }

  return (
    <FormContainer onSubmit={handleFormSignUp}>
      {emptyFields && <p>Preencha todos os campos!</p>}
      {samePassword && <p>Senha e confirmação não estão iguais!</p>}
      {invalidEmail && <p>Email já utilizado</p>}
      {invalidConnection && <p>Conexão com o servidor falhou :(</p>}
      {nonValidField && <p>Preencha os campos corretamente</p>}
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Nome"
        id="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
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
      <input
        type="password"
        name="repeatPassword"
        value={repeatPassword}
        placeholder="Confirme sua senha"
        id="repeatPassword"
        onChange={(e) => setRepeatPassword(e.target.value)}
      ></input>
      <button>Cadastrar</button>
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

  p {
    color: #ff0000;
    margin-top: 0px;
    margin-bottom: 10px;
  }

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
  }
`;
