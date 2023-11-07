import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import NewIncome from "./Pages/NewIncome";
import NewExpense from "./Pages/NewExpense";
import { TokenAndNameContextProvider } from "./Contexts/TokenAndNameContext";

function App() {
  return (
    <BrowserRouter>
      <TokenAndNameContextProvider>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/new-income" element={<NewIncome />} />
          <Route path="/new-expense" element={<NewExpense />} />
        </Routes>
      </TokenAndNameContextProvider>
    </BrowserRouter>
  );
}

export default App;
