import { ReactNode, createContext, useState } from "react";

type TokenContextProps = {
  children: ReactNode;
};

type TokenAndNameContextType = {
  token: string;
  setToken: (newState: string) => void;
  name: string
  setName:(newState: string) => void;
};

const initialTokenAndName = {
  token: "",
  setToken: () => {},
  name:"",
  setName: () => {}
};

export const TokenAndNameContext = createContext<TokenAndNameContextType>(initialTokenAndName);

export const TokenAndNameContextProvider = ({ children }: TokenContextProps) => {
  const [token, setToken] = useState(initialTokenAndName.token);
  const [name, setName] = useState(initialTokenAndName.name);
  
  return (
    <TokenAndNameContext.Provider value={{ token, setToken, name, setName }}>
      {children}
    </TokenAndNameContext.Provider>
  );
};
