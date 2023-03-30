import { useState, useCallback, useEffect, useContext } from "react";
import { Global } from "./Global";
import ErrorMsg from "./ErrorMsg";
import { v4 as uuidv4 } from "uuid";
import Bill from "./Bill";
import AddNewBillForm from "./AddNewBillForm";
import axios from "axios";

function LoggedInBills(props) {
  const URL = "http://localhost:3003/accounts";

  const { clientList, deleteImg, setDelImg } = useContext(Global);

  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [blockUser, setBlockUser] = useState([]);

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

  // useEffect(() => {
  //   if (deleteImg === null) {
  //     return;
  //   }
  //   axios
  //     .delete(URL + "/" + deleteImg.id +"/" deleteImg.image)
  //     .then((res) => props.setLastStateUpdate(Date.now()));
  // }, [deleteImg]);

  useEffect(() => {
    if (blockUser === null) {
      return;
    }
    axios
      .put(URL + "/" + blockUser.id + "/block", blockUser)
      .then((res) => props.setLastStateUpdate(Date.now()));
  }, [blockUser]);

  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios
      .put(URL + "/" + editData.id, editData, { withCredentials: true })
      .then((res) => props.setLastStateUpdate(Date.now()));
  }, [editData]);

  function payTaxesHandler() {
    const updateBalance = clientList.map((person) => {
      axios
        .put(URL + "/" + person.id, {
          ...person,
          amount: person.amount - 5,
        })
        .then((res) => console.log(res.data));
      return {
        ...person,
        amount: person.amount - 5,
      };
    });

    props.setClientList(updateBalance);
  }

  // const sortArrOfObjByProp = (arr, propName) => {
  //   return arr.sort((a, b) => a[propName].localeCompare(b[propName]));
  // };

  const [filteredClients, setFilteredClients] = useState([]);

  const onChangeSort = (event) => {
    const value = event.target.value;
    sortHandler(value);
  };

  const sortHandler = useCallback(
    (value) => {
      if (value === "default") {
        //  setFilteredClients((li) => [...li].sort((a, b) => a.row - b.row));

        setFilteredClients(props.clientList);
      }

      if (value === "amount") {
        setFilteredClients((li) => [...li].sort((a, b) => a.amount - b.amount));
      }

      if (value === "amount+") {
        setFilteredClients((li) => [...li].sort((a, b) => b.amount - a.amount));
      }
      if (value === "surname") {
        setFilteredClients((li) =>
          [...li].sort((a, b) => a.surname.localeCompare(b.surname))
        );
      }
    },
    [props.clientList]
  );

  useEffect(() => {
    sortHandler();
  }, [sortHandler]);

  const onChange = (event) => {
    const value = event.target.value;
    optionsHandler(value);
  };

  const optionsHandler = useCallback(
    (value) => {
      let filteredList = props.clientList;

      if (value === "all") {
        filteredList = props.clientList.filter(
          ({ amount }) => amount < 0 || amount > 0 || amount === 0
        );
      }

      if (value === "without") {
        filteredList = props.clientList.filter(({ amount }) => amount < 0);
      }
      if (value === "with0") {
        filteredList = props.clientList.filter(({ amount }) => amount === 0);
      }
      if (value === "blocked") {
        filteredList = props.clientList.filter(({ blocked }) => blocked === 1);
      }
      if (value === "with") {
        filteredList = props.clientList.filter(({ amount }) => amount > 0);
      }

      setFilteredClients(filteredList);
    },
    [props.clientList]
  );

  useEffect(() => {
    optionsHandler();
  }, [optionsHandler]);

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
      {filteredClients.map((b) => (
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
          setBlockUser={setBlockUser}
          blockUser={blockUser}
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
            onChange={onChange}
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
            <option className={props.className} value="all">
              All accounts
            </option>
            <option className={props.className} value="with">
              With balance
            </option>
            <option className={props.className} value="without">
              With minus balance
            </option>
            <option className={props.className} value="with0">
              With 0 balance
            </option>
            <option className={props.className} value="blocked">
              Blocked accounts
            </option>
          </select>
          <select
            onChange={onChangeSort}
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
            <option className={props.className} value="default">
              Default
            </option>
            <option className={props.className} value="surname">
              Surname
            </option>
            <option className={props.className} value="amount">
              Amount-
            </option>
            <option className={props.className} value="amount+">
              Amount+
            </option>
          </select>
        </div>
        {!blockUser.isBlocked ? null : <ErrorMsg />}
        <button className={props.btnBig} onClick={payTaxesHandler}>
          Taxes
        </button>
      </div>
    </div>
  );
}

export default LoggedInBills;
