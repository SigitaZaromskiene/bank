import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");

  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);

  const logOut = (_) => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLogged(false);
        setAuthName(false);
      });
  };

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        authName,
        setAuthName,
        logOut,
        logged,
        setLogged,
      }}
    >
      {children}
    </Global.Provider>
  );
};
