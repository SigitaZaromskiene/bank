import { v4 as uuidv4 } from "uuid";

function AddNewBillForm(props) {
  const create = (_) => {
    props.setCreateData({
      name: props.addNewName,
      surname: props.addNewSurname,
    });

    props.setNewBill((b) => [
      ...b,
      {
        name: props.addNewName,
        surname: props.addNewSurname,
        id: uuidv4(),
      },
    ]);

    props.setAddNewName("");
    props.setAddNewSurname("");
  };

  const setNameHandler = (e) => {
    props.setAddNewName(e.target.value);
  };

  const setSurnameHandler = (e) => {
    props.setAddNewSurname(e.target.value);
  };
  return (
    <div>
      <div className={props.form}>
        <label>Enter your name and surname to open a new bill</label>
        <input
          type="text"
          placeholder="Name"
          value={props.addNewName}
          onChange={setNameHandler}
          required
        ></input>
        <input
          type="text"
          placeholder="Surname"
          value={props.addNewSurname}
          onChange={setSurnameHandler}
          required
        ></input>
        <button
          className={props.btn}
          // onClick={showNewBillHandler}
          onClick={create}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddNewBillForm;
