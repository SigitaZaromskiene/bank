import { createContext, useState } from "react";
import axios from "axios";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("home");
  const [logged, setLogged] = useState(null);
  const [authName, setAuthName] = useState(null);
  const [clientList, setClientList] = useState([]);
  const [createData, setCreateData] = useState(null);
  // const [editBills, setEditBills] = useState(null);
  const [addOver1000, setAddOver1000] = useState(false);
  // const [saveAmount, setSaveAmount] = useState(null);

  const [disabled, setDisabled] = useState(null);

  const [deleteImg, setDelImg] = useState(false);

  const [editModalTree, setEditModalTree] = useState();

  const logOut = (_) => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setLogged(2);
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
        clientList,
        setClientList,
        setCreateData,
        createData,
        // setSaveAmount,
        // saveAmount,
        disabled,
        setDisabled,
        setAddOver1000,
        addOver1000,
        setDelImg,
        deleteImg,
        editModalTree,
        setEditModalTree,
      }}
    >
      {children}
    </Global.Provider>
  );
};
