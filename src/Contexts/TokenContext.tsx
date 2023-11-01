import { ReactNode, createContext, useState } from "react";

type TokenContextProps = {
  children: ReactNode;
};
type TokenContextType = {
  token: string;
  setToken: (newState: string) => void;
};

const initialToken = {
  token: "",
  setToken: () => {},
};

const TokenContext = createContext<TokenContextType>(initialToken);

export const TokenContextProvider = ({ children }: TokenContextProps) => {
  const [token, setToken] = useState(initialToken.token);
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};
