import { ReactNode, createContext, useState } from "react";

type TokenContextProps = {
  children: ReactNode;
};

type TokenContextType = {
  token: string;
  setToken: (newState: string) => void;
  name: string
  setName:(newState: string) => void;
};

const initialToken = {
  token: "",
  setToken: () => {},
  name:"",
  setName: () => {}
};

export const TokenContext = createContext<TokenContextType>(initialToken);

export const TokenContextProvider = ({ children }: TokenContextProps) => {
  const [token, setToken] = useState(initialToken.token);
  const [name, setName] = useState(initialToken.name);
  
  return (
    <TokenContext.Provider value={{ token, setToken, name, setName }}>
      {children}
    </TokenContext.Provider>
  );
};
