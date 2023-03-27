import { useState, useContext } from "react";
import { Global } from "./Global";

function DeleteBtn(props) {
  const { disabled, blockedBill1 } = useContext(Global);

  const [modal, setModal] = useState({
    class: "hidden",
    msg: "",
    color: "",
  });
  const deleteHandler = () => {
    if (props.bill.amount !== 0) {
      setModal({
        class: "visible",
        msg: "Cannot delete if bill is not empty",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);

      return;
    } else {
      props.setDeleteData(props.bill);
    }

    // props.setClientList((bill) =>
    // bill.filter((bill) => bill.id !== props.bill.id)
    // );
  };

  return (
    <>
      <button
        disabled={props.bill.blocked}
        className={props.classes}
        onClick={deleteHandler}
      >
        Delete
      </button>
      <div className={`${modal.class} modal`}>
        <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
      </div>
    </>
  );
}

export default DeleteBtn;
