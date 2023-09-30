import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element = {<SignIn />}/>
      <Route  path="/signUp" element = {<SignUp />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
