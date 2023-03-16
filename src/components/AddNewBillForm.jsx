import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import axios from "axios";
import ClientsNumber from "./ClientsNumber";
import CurrentBalance from "./CurrentBalance";

const URL = "http://localhost:3003/bills";

function AddNewBillForm({ setLastStateUpdate, flex, form, btn, clientList }) {
  const [addNewName, setAddNewName] = useState("");
  const [addNewSurname, setAddNewSurname] = useState("");
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const [createData, setCreateData] = useState(null);

  useEffect(() => {
    if (createData === null) {
      return;
    }
    axios.post(URL, createData).then((res) => setLastStateUpdate(Date.now()));
  }, [createData, setLastStateUpdate]);

  const create = (_) => {
    if (!addNewName || !addNewSurname) {
      setModal({
        class: "visible",
        msg: "Please enter name and surname",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
      return;
    }

    const regex = /^[a-zA-Z\u0080-\uFFFF]+$/;

    if (!regex.test(addNewName) || !regex.test(addNewSurname)) {
      setModal({
        class: "visible",
        msg: "Cannot use numbers and special chars",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
      return;
    } else {
      setCreateData({
        name: addNewName,
        surname: addNewSurname,
        id: uuidv4(),
        amount: 0,
      });

      setModal({
        class: "visible",
        msg: "The bill was created",
        color: "white",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 1000);

      setAddNewName("");
      setAddNewSurname("");
    }
  };
  const setNameHandler = (e) => {
    setAddNewName(e.target.value);
  };

  const setSurnameHandler = (e) => {
    setAddNewSurname(e.target.value);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <ClientsNumber
          className="header"
          clientList={clientList}
        ></ClientsNumber>
        <CurrentBalance
          className="header"
          clientList={clientList}
        ></CurrentBalance>
      </div>
      <div className={flex}>
        <div className={form}>
          <label>Enter your name and surname to open a new bill</label>
          <input
            type="text"
            placeholder="Name"
            value={addNewName}
            onChange={setNameHandler}
            required
          ></input>
          <input
            type="text"
            placeholder="Surname"
            value={addNewSurname}
            onChange={setSurnameHandler}
            required
          ></input>
          <button className={btn} onClick={create}>
            Submit
          </button>
        </div>
        <div className={`${modal.class} modal`}>
          <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
        </div>
      </div>
    </div>
  );
}

export default AddNewBillForm;
