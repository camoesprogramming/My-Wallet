import SignUpForm from "../Components/SignUpForm";
import FormsContainer from "../Components/FormsContainer";

export default function SignUp() {
  return (
    <FormsContainer destination="/" textLink="Já tem uma conta? Entre agora!">
      <SignUpForm />
    </FormsContainer>
  );
}



