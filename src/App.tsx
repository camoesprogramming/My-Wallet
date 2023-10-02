import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element = {<SignIn />}/>
      <Route  path="/signUp" element = {<SignUp />}/>
      <Route  path="/home" element = {<Home />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
