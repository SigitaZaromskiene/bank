import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import AddWithdrawMoney from "./AddWithdrawMoney";

function Bill(props) {
  const [amount, setAmount] = useState(0);
  const [submitAmount, setSubmitAmount] = useState([]);

  console.log(amount);
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
      </div>
      <AddWithdrawMoney
        amount={amount}
        setAmount={setAmount}
        submitAmount={submitAmount}
        setSubmitAmount={setSubmitAmount}
      ></AddWithdrawMoney>
      <DeleteBtn
        setNewBill={props.setNewBill}
        id={props.id}
        amount={amount}
        classes={props.classes}
      />
    </div>
  );
}

export default Bill;
