import "./App.scss";
import Nav from "./components/Nav";
import { GlobalProvider } from "./components/Global";
import { useEffect, useState } from "react";
import axios from "axios";
import Routes from "./components/Routes";

const URL = "http://localhost:3003/bills";

function App() {
  const [clientList, setClientList] = useState([]);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());

  useEffect(() => {
    axios.get(URL).then((res) => {
      setClientList(res.data);
    });
  }, [lastStateUpdate]);

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    axios
      .delete(URL + "/" + deleteData.id)
      .then((res) => setLastStateUpdate(Date.now()));
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }

    console.log(editData);

    axios
      .put(URL + "/" + editData.action + "/" + editData.id, {
        number: editData.number,
      })
      .then((res) => {
        setLastStateUpdate(Date.now());
      });
  }, [editData]);

  // useEffect(
  //   () => localStorage.setItem("newBills", JSON.stringify(clientList)),
  //   [clientList]
  // );

  return (
    <GlobalProvider>
      <Nav className="nav" hover="hover"></Nav>

      {
        <Routes
          clientList={clientList}
          setClientList={setClientList}
          setLastStateUpdate={setLastStateUpdate}
          setDeleteData={setDeleteData}
          setEditData={setEditData}
          btn="button"
        ></Routes>
      }
      {/* <LoggedInBills
        clientList={clientList}
        setClientList={setClientList}
        setLastStateUpdate={setLastStateUpdate}
        setDeleteData={setDeleteData}
        setEditData={setEditData}
      ></LoggedInBills> */}
    </GlobalProvider>
  );
}

export default App;
