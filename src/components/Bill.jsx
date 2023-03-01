import { useState } from "react";
import DeleteBtn from "./DeleteBtn";

function Bill(props) {
  const [amount, setAmount] = useState(0);
  const [submitAmount, setSubmitAmount] = useState("");

  const submitAmountHandler = (e) => {
    setSubmitAmount(e.target.value > 0 ? e.target.value : 0);
  };
  const addMoneyHandler = () => {
    setAmount((a) => Number(a) + Number(submitAmount));
  };

  const withdrawMoneyHandler = () => {
    setAmount((a) => Number(a) - Number(submitAmount));
  };

  return (
    <div className={props.billContainer}>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p>{props.addNewSurname}</p>
        <p>Total: {amount > 0 ? amount.toFixed(2, 0) : 0}</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button className={props.btn} onClick={addMoneyHandler}>
            Add money
          </button>
          <input
            type="number"
            style={{
              height: "50px",
              width: "250px",
              fontSize: "30px",
            }}
            onChange={submitAmountHandler}
          ></input>

          <button className={props.btn} onClick={withdrawMoneyHandler}>
            Withdraw money
          </button>
        </div>
        <DeleteBtn
          setNewBill={props.setNewBill}
          id={props.id}
          amount={amount}
        />
      </div>
    </div>
  );
}

export default Bill;
