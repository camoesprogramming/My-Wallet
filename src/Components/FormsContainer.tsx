import styled from "styled-components";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

type FormsContainerProps = {
  children: ReactNode;
  textLink: string;
  destination: string;
};

export default function FormsContainer({
  children,
  textLink,
  destination,
}: FormsContainerProps) {
  return (
    <Container>
      <h1>My Wallet</h1>
      {children}
      <Link to={destination}>
        <p>{textLink}</p>
      </Link >

    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #9567be;

  h1 {
    font-family: Saira Stencil One;
    color: #f9f9f9;
    background-color: #9567be;
    font-size: 32px;
    margin-bottom: 24px;
  }

  p {
    font-family: "Raleway";
    font-size: 15px;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #f9f9f9;
    margin-top: 32px;
  }
`;
