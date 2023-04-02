import { useState, useContext } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";

function AddWithdrawMoney(props) {
  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });
  const [newAmount, setNewAmount] = useState("");
  const [addOver1000, setAddOver1000] = useState(false);
  const { deleteImg, setSaveAmount, saveAmount } = useContext(Global);

  const [file, readFile, remImage] = useFile();

  const add = (_) => {
    if (newAmount >= 1000) {
      setAddOver1000(true);
      setSaveAmount(newAmount);
      return;
    }

    const updatedBill = props.clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;

      const newTotalAmount = Number(bill.amount) + Number(newAmount);
      bill.amount = newTotalAmount >= 0 ? newTotalAmount : bill.amount;
      return bill;
    });

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
        name: props.bill.name,
        surname: props.bill.surname,
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
        name: props.bill.name,
        surname: props.bill.surname,
        number: parseInt(newAmount),
        amount: props.bill.amount,
        id: props.bill.id,
        file,
      });

      props.setClientList(updatedBill);
    }
  };

  const addConfirmHandler = () => {
    const updatedBill = props.clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;

      const newTotalAmount = Number(bill.amount) + Number(saveAmount);
      bill.amount = newTotalAmount;
      return bill;
    });

    props.setEditData({
      name: props.bill.name,
      surname: props.bill.surname,
      number: parseInt(newAmount),
      amount: props.bill.amount,
      id: props.bill.id,
      file,
    });

    props.setClientList(updatedBill);
    setAddOver1000(false);
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
        <div className="modalA">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
              fontSize: "20px",
            }}
          >
            Are you sure you want to add money?
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <button className="button" onClick={addConfirmHandler}>
                Confirm
              </button>
              <button className="button" onClick={() => setAddOver1000(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
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
