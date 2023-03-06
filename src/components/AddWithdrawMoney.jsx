import { useState } from "react";

function AddWithdrawMoney(props) {
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });
  const validateAmount = () => {
    if (!props.amount) {
      setModal({
        class: "visible",
        msg: "Please enter amount",
        color: "hsl(350, 75%, 60%)",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
    }
    return !!props.amount;
  };

  const addMoneyHandler = () => {
    if (!validateAmount()) return;

    const updatedBill = props.newBill.map((bill) => {
      if (bill.id !== props.id) return bill;

      const newAmount = Number(bill.amount) + Number(props.amount);
      bill.amount = newAmount >= 0 ? newAmount : bill.amount;

      return bill;
    });

    alert(`${props.amount} € has been added`);
    props.setNewBill(updatedBill);
  };

  const withdrawMoneyHandler = () => {
    if (!validateAmount()) return;

    const updatedBill = props.newBill.map((bill) => {
      if (bill.id !== props.id) return bill;

      const newAmount = Number(bill.amount) - Number(props.amount);
      const isNewAmountValid = newAmount >= 0;

      if (isNewAmountValid) {
        bill.amount = newAmount >= 0 ? newAmount : bill.amount;
      }

      if (!isNewAmountValid) {
        setModal({
          class: "visible",
          msg: "hhh",
          color: "hsl(350, 75%, 60%)",
        });
        setTimeout(() => {
          setModal({ class: "hidden", msg: "", color: "" });
        }, 2000);
      }

      return bill;
    });

    alert(`${props.amount} € has been withdrawn`);
    props.setNewBill(updatedBill);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <button className={props.add} onClick={addMoneyHandler}>
        Add &euro;
      </button>
      <input
        type="number"
        value={props.amount}
        style={{
          fontSize: "30px",
          marginLeft: "2px",
          marginRight: "2px",
          width: "100px",
        }}
        onChange={(e) => props.setAmount(e.target.value)}
      ></input>

      <button className={props.add} onClick={withdrawMoneyHandler}>
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
