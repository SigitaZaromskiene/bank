import { useState, useCallback, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import Bill from "./Bill";
import AddNewBillForm from "./AddNewBillForm";
import axios from "axios";

function LoggedInBills(props) {
  const URL = "http://localhost:3003/bills";

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

    console.log(editData);

    axios
      .put(URL + "/" + editData.action + "/" + editData.id, {
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

      if (filterType === "with") {
        filteredList = props.clientList.filter(({ amount }) => amount);
      }
      if (filterType === "without") {
        filteredList = props.clientList.filter(({ amount }) => !amount);
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
        btn="button"
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

export default LoggedInBills;
