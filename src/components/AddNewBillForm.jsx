import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import ClientsNumber from "./ClientsNumber";
import CurrentBalance from "./CurrentBalance";
import { Global } from "./Global";
import AccWithoutImg from "./AccWithoutImg";
import AccWithMoney from "./AccWithMoney";
import EmptyAcc from "./EmptyAcc";

const URL = "http://localhost:3003/bills";

function AddNewBillForm({ setLastStateUpdate, flex, form, btnBig }) {
  const [addNewName, setAddNewName] = useState("");
  const [addNewSurname, setAddNewSurname] = useState("");
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const { clientList, createData, setCreateData } = useContext(Global);

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
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1.5fr 1fr 1.5fr",
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
        <AccWithoutImg
          className="header"
          clientList={clientList}
        ></AccWithoutImg>
        <EmptyAcc className="header" clientList={clientList}></EmptyAcc>
        <AccWithMoney className="header" clientList={clientList}></AccWithMoney>
      </div>
      <div className={flex}>
        <div className={form}>
          <label>Open a new account</label>
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
          <input
            type="text"
            placeholder="Passport photo"
            value={addNewName}
            onChange={setNameHandler}
            required
          ></input>
          <button className={btnBig} onClick={create}>
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
