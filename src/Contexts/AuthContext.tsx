import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<UserContextType | undefined>(
  undefined
);

type UserData = {
  token: string ;
};

type UserContextType = {
  token: UserData;
  setToken: React.Dispatch<React.SetStateAction<UserData>>;
};

export default function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const localUserData = JSON.parse(localStorage.getItem("userData") || '{"token":""}') as UserData;
  const [token, setToken] = useState(
    localUserData === null ? {token: ""} : localUserData
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (localUserData === null || {token: ""}) {
      navigate("/");
    } else {
      navigate("/home");
    }
  });

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
