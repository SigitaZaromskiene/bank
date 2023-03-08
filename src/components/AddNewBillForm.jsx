import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { useContext } from "react";
import { Global } from "./Global";

function AddNewBillForm(props) {
  const [name, setAddNewName] = useState("");
  const [surname, setAddNewSurname] = useState("");
  // const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });
  const { setCreate } = useContext(Global);

  const add = () => {
    setCreate({
      name: name,
      surname: surname,
      amount: 0,
    });

    setAddNewName("");
    setAddNewSurname("");
  };

  // const create = (_) => {
  //   if (!addNewName || !addNewSurname) {
  //     setModal({
  //       class: "visible",
  //       msg: "Please enter name and surname",
  //       color: "red",
  //     });
  //     setTimeout(() => {
  //       setModal({ class: "hidden", msg: "", color: "" });
  //     }, 2000);
  //     return;
  //   }

  //   const regex = /^[a-zA-Z\u0080-\uFFFF]+$/;

  //   if (!regex.test(addNewName) || !regex.test(addNewSurname)) {
  //     setModal({
  //       class: "visible",
  //       msg: "Cannot use numbers and special chars",
  //       color: "red",
  //     });
  //     setTimeout(() => {
  //       setModal({ class: "hidden", msg: "", color: "" });
  //     }, 2000);
  //     return;
  //   } else {
  //     props.setClientList((b) => [
  //       ...b,
  //       {
  //         name: addNewName,
  //         surname: addNewSurname,
  //         id: uuidv4(),
  //         amount: 0,
  //       },
  //     ]);

  //     setModal({
  //       class: "visible",
  //       msg: "The bill was created",
  //       color: "white",
  //     });
  //     setTimeout(() => {
  //       setModal({ class: "hidden", msg: "", color: "" });
  //     }, 1000);

  //     setAddNewName("");
  //     setAddNewSurname("");
  //   }
  // };
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
          value={name}
          onChange={setNameHandler}
          required
        ></input>
        <input
          type="text"
          placeholder="Surname"
          value={surname}
          onChange={setSurnameHandler}
          required
        ></input>
        <button className={props.btn} onClick={add}>
          Submit
        </button>
      </div>
      {/* <div className={`${modal.class} modal`}>
        <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
      </div> */}
    </div>
  );
}

export default AddNewBillForm;
