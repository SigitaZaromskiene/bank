import { useState, useCallback, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import Bill from "./Bill";
import AddNewBillForm from "./AddNewBillForm";
import axios from "axios";

function LoggedInBills(props) {
  console.log(props);
  const URL = "http://localhost:3003/accounts";

  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    if (props.lastStateUpdate === null) {
      return;
    }
    axios.get(URL).then((res) => {
      props.setClientList(res.data);
    });
  }, [props.lastStateUpdate]);

  useEffect(() => {
    if (deleteData === null) {
      return;
    }
    axios
      .delete(URL + "/" + deleteData.id)
      .then((res) => props.setLastStateUpdate(Date.now()));
  }, [deleteData]);

  useEffect(() => {
    if (null === editData) {
      return;
    }

    axios
      .put(URL + "/" + editData.id, {
        number: editData.number,
      })
      .then((res) => {
        props.setLastStateUpdate(Date.now());
      });
  }, [editData]);
  const sortArrOfObjByProp = (arr, propName) => {
    return arr.sort((a, b) => a[propName].localeCompare(b[propName]));
  };

  const [filteredClients, setFilteredClients] = useState([]);

  const filterClient = useCallback(
    (filterType) => {
      let filteredList = props.clientList;

      if (filterType === "all") {
        filteredList = props.clientList.filter(({ amount }) => amount);
      }

      if (filterType === "without") {
        filteredList = props.clientList.filter(({ amount }) => amount < 0);
      }
      if (filterType === "with0") {
        filteredList = props.clientList.filter(({ amount }) => amount === 0);
      }
      if (filterType === "blocked") {
        filteredList = props.clientList.filter(
          ({ blocked }) => blocked === true
        );
      }
      if (filterType === "with") {
        filteredList = props.clientList.filter(({ amount }) => amount > 0);
      }

      setFilteredClients(filteredList);
    },
    [props.clientList]
  );

  useEffect(() => {
    filterClient();
  }, [filterClient]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <AddNewBillForm
        clientList={props.clientList}
        setClientList={props.setClientList}
        form="form"
        btnBig="button-big"
        billContainer="bill-container"
        flex="flex"
        modal="modal"
        setLastStateUpdate={props.setLastStateUpdate}
      ></AddNewBillForm>
      {sortArrOfObjByProp(filteredClients, "surname").map((b) => (
        <Bill
          key={uuidv4()}
          text={b}
          billContainer="bill-container"
          classes="button"
          total={b.total}
          setClientList={props.setClientList}
          clientList={props.clientList}
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
          justifyContent: "space-between",
          padding: "40px 150px",
          marginBottom: "150px",
        }}
      >
        <div style={{ display: "flex", gap: "50px" }}>
          <select
            style={{
              display: "flex",
              height: "50px",
              borderRadius: "15px",
              padding: " 5px 10px",
              backgroundColor: "#f4f6f9",
              cursor: "pointer",
              justifyContent: "flex-start",
              fontSize: "16px",
            }}
          >
            <option>Select to see accounts</option>
            <option
              className={props.className}
              value="1"
              onChange={() => filterClient("all")}
            >
              All accounts
            </option>
            <option
              className={props.className}
              value="2"
              onChange={() => filterClient("with")}
            >
              With balance
            </option>
            <option
              className={props.className}
              value="3"
              onClick={() => filterClient("without")}
            >
              With minus balance
            </option>
            <option
              className={props.className}
              value="4"
              onClick={() => filterClient("with0")}
            >
              With 0 balance
            </option>
            <option
              className={props.className}
              value="5"
              onClick={() => filterClient("blocked")}
            >
              Blocked accounts
            </option>
          </select>

          <select
            style={{
              display: "flex",
              height: "50px",
              borderRadius: "15px",
              padding: " 5px 10px",
              backgroundColor: "#f4f6f9",
              justifyContent: "flex-start",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            <option>Sort by</option>
            <option
              className={props.className}
              value="1"
              onChange={() => filterClient("all")}
            >
              All
            </option>
            <option
              className={props.className}
              value="2"
              onChange={() => filterClient("with")}
            >
              Surname
            </option>
            <option
              className={props.className}
              value="3"
              onClick={() => filterClient("without")}
            >
              Amount
            </option>
          </select>
        </div>
        <button className={props.btnBig}>Taxes</button>
        {/* <button className={props.btnBig} onClick={() => filterClient("all")}>
          All
        </button>
        <button className={props.btnBig} onClick={() => filterClient("with")}>
          With &euro;
        </button>
        <button className={props.btnBig} onClick={() => filterClient("with0")}>
          With 0 &euro;
        </button>
        <button
          className={props.btnBig}
          onClick={() => filterClient("without")}
        >
          With minus &euro;
        </button>
        <button
          className={props.btnBig}
          onClick={() => filterClient("blocked")}
        >
          Blocked
        </button>
        <button
          className={props.btnBig}
          onClick={() => filterClient("notBlocked")}
        >
          Available
        </button> */}
      </div>
    </div>
  );
}

export default LoggedInBills;
