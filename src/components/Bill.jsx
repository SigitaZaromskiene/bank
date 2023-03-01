import DeleteBtn from "./DeleteBtn";
import { useState } from "react";

function Bill(props) {
  const [amount, setAmount] = useState(0);
  const [submitAmount, setSubmitAmount] = useState([]);
  console.log(amount);

  const submitAmountHandler = (e) => {
    setSubmitAmount(e.target.value > 0 ? e.target.value : 0);
  };
  const addMoneyHandler = () => {
    setAmount((a) => [...a] + Number(submitAmount));

    setSubmitAmount("");
  };

  const withdrawMoneyHandler = () => {
    setAmount((a) =>
      Number(a) > Number(submitAmount) && Number(a) - Number(submitAmount)
        ? Number(a) - Number(submitAmount)
        : Number(a)
    );
    setSubmitAmount("");
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
        <p>{props.name}</p>
        <p>{props.surName}</p>

        <p>Total: {amount} &euro;</p>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button className={props.classes} onClick={addMoneyHandler}>
            Add money
          </button>
          <input
            type="number"
            value={submitAmount}
            style={{
              height: "50px",
              width: "250px",
              fontSize: "30px",
            }}
            onChange={submitAmountHandler}
          ></input>

          <button className={props.classes} onClick={withdrawMoneyHandler}>
            Withdraw money
          </button>
        </div>
        <DeleteBtn
          setNewBill={props.setNewBill}
          id={props.id}
          amount={props.amount}
          classes={props.classes}
        />
      </div>
    </div>
  );
}

export default Bill;
