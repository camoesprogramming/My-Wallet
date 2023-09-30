import styled from "styled-components";
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

type userInfo = {
  email:string,
  password:string
}

export default function SignInForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    const userData: userInfo =  {
      email: email,
      password: password
    }
    
  }
  
  return (
    <FormContainer onSubmit={handleLogin}>
      
        <input 
        type="text" 
        name="email" 
        value={email} 
        placeholder="E-mail"
        id="email"
        onChange={(e) => setEmail(e.target.value)}></input>
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Senha"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button>Entrar</button>
      
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #9567BE;
  width: 80%;

  input, button {
    width: 100%;
    height: 58px;
    font-family: 'Raleway';
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
    background-color: #A328D6;
    color: #f9f9f9;
    font-family: 'Raleway';
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
