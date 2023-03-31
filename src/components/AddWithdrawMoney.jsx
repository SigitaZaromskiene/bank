import { useState, useContext } from "react";
import { Global } from "./Global";
import AddOver1000 from "./AddOver1000";
import { useFile } from "./useFile";

function AddWithdrawMoney(props) {
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });
  const [newAmount, setNewAmount] = useState("");
  const { setAddOver1000, addOver1000, deleteImg } = useContext(Global);

  const [file, readFile, remImage] = useFile();

  const add = (_) => {
    const updatedBill = props.clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;
      else {
        const newTotalAmount = Number(bill.amount) + Number(newAmount);
        bill.amount = newTotalAmount >= 0 ? newTotalAmount : bill.amount;
        return bill;
      }
    });

    if (newAmount >= 1000) {
      setAddOver1000(true);
    }

    if (!newAmount) {
      setModal({
        class: "visible",
        msg: "Please enter amount",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
    } else {
      props.setEditData({
        number: parseInt(newAmount),
        amount: props.bill.amount,
        id: props.bill.id,
        file,
      });

      props.setClientList(updatedBill);
    }
  };

  const remove = (_) => {
    let isNewAmountValid = true;

    const updatedBill = props.clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;

      const newTotalAmount = Number(bill.amount) - Number(newAmount);
      isNewAmountValid = newTotalAmount >= 0;
      bill.amount = isNewAmountValid ? newTotalAmount : bill.amount;
      return bill;
    });

    if (!isNewAmountValid) {
      setModal({
        class: "visible",
        msg: "Not enough funds",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);

      return;
    } else if (!newAmount) {
      setModal({
        class: "visible",
        msg: "Please enter amount",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
    } else {
      props.setEditData({
        number: parseInt(newAmount),
        amount: props.bill.amount,
        id: props.bill.id,
        file,
      });

      props.setClientList(updatedBill);
    }
  };

  // if (!validateAmount) {
  //   setModal({
  //     class: "visible",
  //     msg: "Not enough funds",
  //     color: "red",
  //   });
  //   setTimeout(() => {
  //     setModal({ class: "hidden", msg: "", color: "" });
  //   }, 2000);

  //   return;
  // }

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
        gap: "15px",
      }}
    >
      <button disabled={props.bill.blocked} className={props.add} onClick={add}>
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
      {addOver1000 ? (
        <AddOver1000
          bill={props.bill}
          setEditData={props.setEditData}
          newAmount={newAmount}
        />
      ) : (
        ""
      )}

      <button
        disabled={props.bill.blocked}
        className={props.add}
        onClick={remove}
      >
        Withdraw &euro;
      </button>
      <div style={{ width: "230px" }}>
        <p className={props.totalClass}>
          Total: {props.bill.amount.toFixed(2, 0)} &euro;
        </p>
      </div>
      <div className={`${modal.class} modal`}>
        <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
      </div>
    </div>
  );
}

export default AddWithdrawMoney;
