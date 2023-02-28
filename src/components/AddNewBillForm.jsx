function AddNewBillForm(props) {
  const showNewBillHandler = () => {
    props.setNewBill((b) => [...b, props.addNewBill]);
    props.setAddNewBill("");
  };

  const setNameHandler = (e) => {
    props.setAddNewBill(e.target.value);
  };
  return (
    <div>
      <div className={props.form}>
        <label>Enter your name and surname to open a new bill</label>
        <input
          type="text"
          value={props.addNewBill}
          onChange={setNameHandler}
        ></input>
        <button onClick={showNewBillHandler}>Submit</button>
      </div>
    </div>
  );
}

export default AddNewBillForm;
