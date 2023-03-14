import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useEffect, useState, useCallback } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";
import ClientsNumber from "./components/ClientsNumber";
import CurrentBalance from "./components/CurrentBalance";
import axios from "axios";
import CookieMonster from "./components/CookieMonster";
import Login from "./components/Login";

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

  const sortArrOfObjByProp = (arr, propName) => {
    return arr.sort((a, b) => a[propName].localeCompare(b[propName]));
  };

  const [filteredClients, setFilteredClients] = useState([]);

  const filterClient = useCallback(
    (filterType) => {
      let filteredList = clientList;

      if (filterType === "with") {
        filteredList = clientList.filter(({ amount }) => amount);
      }
      if (filterType === "without") {
        filteredList = clientList.filter(({ amount }) => !amount);
      }

      setFilteredClients(filteredList);
    },
    [clientList]
  );

  useEffect(() => {
    filterClient();
  }, [filterClient]);

  // useEffect(
  //   () => localStorage.setItem("newBills", JSON.stringify(clientList)),
  //   [clientList]
  // );

  return (
    <div className="App">
      {/* <Login></Login> */}
      <CookieMonster></CookieMonster>
      <header className="App-header">
        <ClientsNumber
          className="header"
          clientList={clientList}
        ></ClientsNumber>
        <CurrentBalance
          className="header"
          clientList={clientList}
        ></CurrentBalance>
      </header>
      <AddNewBillForm
        clientList={clientList}
        setClientList={setClientList}
        form="form"
        btn="button"
        billContainer="bill-container"
        flex="flex"
        modal="modal"
        setLastStateUpdate={setLastStateUpdate}
      ></AddNewBillForm>
      {sortArrOfObjByProp(filteredClients, "surname").map((b) => (
        <Bill
          key={uuidv4()}
          text={b}
          billContainer="bill-container"
          classes="button"
          total={b.total}
          setClientList={setClientList}
          clientList={clientList}
          bill="bill"
          add="button-add"
          totalClass="total"
          modal="modal"
          setDeleteData={setDeleteData}
          setEditData={setEditData}
        ></Bill>
      ))}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button className="button" onClick={() => filterClient("all")}>
          All
        </button>
        <button className="button" onClick={() => filterClient("with")}>
          With &euro;
        </button>
        <button className="button" onClick={() => filterClient("without")}>
          Without &euro;
        </button>
      </div>
    </div>
  );
}

export default App;
