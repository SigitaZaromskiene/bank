import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddWithdrawMoney(props) {
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });
  const [newAmount, setNewAmount] = useState("");

  const add = (_) => {
    props.setEditData({
      number: parseInt(newAmount),
      action: "add",
      id: props.bill.id,
    });
  };

  const remove = (_) => {
    props.setEditData({
      number: parseInt(newAmount),
      action: "remove",
      id: props.bill.id,
    });
  };
  // const validateAmount = () => {
  //   if (!newAmount) {
  //     setModal({
  //       class: "visible",
  //       msg: "Please enter amount",
  //       color: "red",
  //     });
  //     setTimeout(() => {
  //       setModal({ class: "hidden", msg: "", color: "" });
  //     }, 2000);
  //   }
  //   return !!newAmount;
  // };

  // const addMoneyHandler = () => {
  //   if (!validateAmount()) return;

  //   const updatedBill = props.clientList.map((bill) => {
  //     if (bill.id !== props.bill.id) return bill;

  //     const newTotalAmount = Number(bill.amount) + Number(newAmount);
  //     bill.amount = newTotalAmount >= 0 ? newTotalAmount : bill.amount;

  //     return bill;
  //   });

  //   props.setClientList(updatedBill);
  // };

  // const withdrawMoneyHandler = () => {
  //   if (!validateAmount()) return;

  //   let isNewAmountValid = true;

  //   const updatedBill = props.clientList.map((bill) => {
  //     if (bill.id !== props.bill.id) return bill;

  //     const newTotalAmount = Number(bill.amount) - Number(newAmount);
  //     isNewAmountValid = newTotalAmount >= 0;
  //     bill.amount = isNewAmountValid ? newTotalAmount : bill.amount;
  //     return bill;
  //   });

  //   if (!isNewAmountValid) {
  //     setModal({
  //       class: "visible",
  //       msg: "Not enough funds",
  //       color: "red",
  //     });
  //     setTimeout(() => {
  //       setModal({ class: "hidden", msg: "", color: "" });
  //     }, 2000);

  //     return;
  //   }

  //   props.setClientList(updatedBill);
  // };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <button className={props.add} onClick={add}>
        Add &euro;
      </button>
      <input
        type="number"
        min="0"
        value={newAmount}
        style={{
          fontSize: "30px",
          marginLeft: "2px",
          marginRight: "2px",
          width: "100px",
        }}
        onChange={(e) => setNewAmount(e.target.value)}
      ></input>

      <button className={props.add} onClick={remove}>
        Withdraw &euro;
      </button>
      <p className={props.totalClass}>Total: {props.bill.amount} &euro;</p>
      <div className={`${modal.class} modal`}>
        <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
      </div>
    </div>
  );
}

export default AddWithdrawMoney;
