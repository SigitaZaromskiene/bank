import { createContext } from "react";
import { useWrite } from "../use/useWrite.js";
import { useRead } from "../use/useRead.js";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [response, setCreate] = useWrite();
  const [bill, setCreateBill] = useRead();
  return (
    <Global.Provider
      value={{
        setCreate,
        bill,
      }}
    >
      {children}
    </Global.Provider>
  );
};
