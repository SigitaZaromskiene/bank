import { useContext, useState } from "react";
import { Global } from "./Global";

function BlockBtn(props) {
  const [modal, setModal] = useState({
    class: "hidden",
    msg: "",
    color: "",
  });
  const { disabled, setDisabled, clientList, setClientList } =
    useContext(Global);

  const blockHandler = () => {
    const blockedBill = clientList.find((bill) => bill.id === props.bill.id);

    setDisabled(true);

    setModal({
      class: "visible",
      msg: "Cannot use blocked accounts",
      color: "red",
    });
    setTimeout(() => {
      setModal({ class: "hidden", msg: "", color: "" });
    }, 2000);
  };

  //  props.setChangePhoto(null);

  const unblockHandler = () => {
    const blockedBill = clientList.find((bill) => bill.id === props.bill.id);
    // setUnblocked((s) => s.map((s) => s === unBlocked));

    setDisabled(false);
  };

  return (
    <>
      {disabled ? (
        <>
          <button
            disabled={!disabled}
            className={props.classes}
            onClick={unblockHandler}
            style={{ color: "darkRed" }}
          >
            Unblock
          </button>
        </>
      ) : (
        <>
          <button
            disabled={disabled}
            className={props.classes}
            onClick={blockHandler}
            style={{ color: "darkRed" }}
          >
            Block
          </button>
          <div className={`${modal.class} modal`}>
            <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
          </div>
        </>
      )}
    </>
  );
}

export default BlockBtn;
