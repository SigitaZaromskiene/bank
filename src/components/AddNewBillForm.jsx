import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import axios from "axios";

const URL = "http://localhost:3003/bills";

function AddNewBillForm(props) {
  const [addNewName, setAddNewName] = useState("");
  const [addNewSurname, setAddNewSurname] = useState("");
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const [createData, setCreateData] = useState([]);

  useEffect(() => {
    axios.post(URL, createData).then((res) => console.log(res.data));
  }, [createData]);

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
    <div className={props.flex}>
      <div className={props.form}>
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
        <button className={props.btn} onClick={create}>
          Submit
        </button>
      </div>
      <div className={`${modal.class} modal`}>
        <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
      </div>
    </div>
  );
}

export default AddNewBillForm;
