import styled from "styled-components";
import React, { ReactEventHandler, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../Constants/url";
import axios from "axios";
import { TokenAndNameContext } from "../Contexts/TokenAndNameContext";

export default function RegisterContentForm({ income }: { income: boolean }) {
  const [value, setValue] = useState<Number | null>();
  const [description, setDescription] = useState<String | null>();
  const { token } = useContext(TokenAndNameContext);
  const navigate = useNavigate();

  function handleForm(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    const link = `${baseUrl}new-input`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const data = {
      income: income,
      value: value,
      description: description,
    };

    const promise = axios.post(link, data, config);
    promise
      .then((res) => navigate("/home"))
      .catch((err) => alert("Error sending data"));
  }
  return (
    <FormContainer onSubmit={handleForm}>
      <input
        type="number"
        step="0.01"
        placeholder="Value"
        name="Value"
        id="Value"
        onChange={(e) => {
          const sanitizedValue = e.target.value.replace(",", ".");
          setValue(parseFloat(sanitizedValue));
        }}
      />
      <input
        type="text"
        placeholder="Description"
        name="Description"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Register {income === true ? "Income" : "Expense"}</button>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  input {
    width: 100%;
    height: 58px;
    padding-left: 15px;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    margin-bottom: 13px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    height: 46px;
    border-radius: 5px;
    background-color: #a328d6;
    border: none;
    font-family: "Raleway";
    font-size: 20px;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
`;
