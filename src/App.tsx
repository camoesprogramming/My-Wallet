import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import NewIncome from "./Pages/NewIncome";
import NewExpense from "./Pages/NewExpense";
import { TokenContextProvider } from "./Contexts/TokenContext";

function App() {
  return (
    <BrowserRouter>
      <TokenContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-income" element={<NewIncome />} />
          <Route path="/new-expense" element={<NewExpense />} />
        </Routes>
      </TokenContextProvider>
    </BrowserRouter>
  );
}

export default App;
