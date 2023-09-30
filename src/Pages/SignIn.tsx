import styled from "styled-components";
import SignInForm from "../Components/SignInForm";

import FormsContainer from "../Components/FormsContainer";

export default function SignIn() {
  return (
    <FormsContainer textLink="Primeira vez? Cadastre-se" destination="/signUp">
      <SignInForm />
    </FormsContainer>
  );
}
