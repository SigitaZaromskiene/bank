import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import AddWithdrawMoney from "./AddWithdrawMoney";

function Bill(props) {
  const [amount, setAmount] = useState(0);

  return (
    <div className={props.billContainer}>
      <div
        style={{
          display: "flex",
          width: "100%",
          gap: "40px",
          alignItems: "center",
          fontWeight: "500px",
          justifyContent: "center",
        }}
      >
        <p>{props.name}</p>
        <p>{props.surName}</p>
      </div>
      <AddWithdrawMoney
        classes={props.classes}
        classesMoney={props.classesMoney}
        amount={amount}
        setAmount={setAmount}
        newBill={props.newBill}
        setNewBill={props.setNewBill}
        id={props.id}
        bill={props.text}
      ></AddWithdrawMoney>
      <DeleteBtn
        setNewBill={props.setNewBill}
        newBill={props.newBill}
        id={props.id}
        bill={props.text}
        amount={amount}
        classes={props.classes}
        setAddNewName={props.setAddNewName}
        setAddNewSurname={props.setAddNewSurname}
        setDeleteForm={props.setDeleteForm}
      />
    </div>
  );
}

export default Bill;
