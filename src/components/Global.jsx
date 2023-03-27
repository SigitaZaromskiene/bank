import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [clientList, setClientList] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [editBills, setEditBills] = useState(null);

  const [file, setFile] = useState(null);

  const [disabled, setDisabled] = useState(null);

  const logOut = (_) => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLogged(2);
        setAuthName(false);
      });
  };

  // const block = (_) => {
  //   axios
  //     .post("http://localhost:3003/block", {}, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       setLogged(2);
  //       setDisabled(true);
  //     });
  // };

  // const unblock = (_) => {
  //   axios
  //     .post("http://localhost:3003/unblock", {}, { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       setLogged(2);
  //       setDisabled(false);
  //     });
  // };

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
        clientList,
        setClientList,
        setCreateData,
        createData,
        setEditBills,
        editBills,
        disabled,
        setDisabled,
      }}
    >
      {children}
    </Global.Provider>
  );
};
