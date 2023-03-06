import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddNewBillForm(props) {
  const [addNewName, setAddNewName] = useState([]);
  const [addNewSurname, setAddNewSurname] = useState([]);
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

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
    if (typeof addNewName !== "string" || typeof addNewSurname !== "string") {
      setModal({
        class: "visible",
        msg: "Cannot use numbers",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
      return;
    } else {
      props.setClientList((b) => [
        ...b,
        {
          name: addNewName,
          surname: addNewSurname,
          id: uuidv4(),
          amount: 0,
        },
      ]);

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
