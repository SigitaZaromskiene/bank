import { useContext, useState } from "react";
import { Global } from "./Global";

function BlockBtn(props) {
  const [modal, setModal] = useState({
    class: "hidden",
    msg: "",
    color: "",
  });
  const { disabled, setDisabled, clientList } = useContext(Global);

  const blockHandler = () => {
    const blockedBill = clientList.find((bill) => bill.id === props.bill.id);

    // sauni requesta i backenda, nustatyti blocked = 1
    // ant then sauni requesta is naujo pafetchinti visus accounts, turi pareiti updeitintas billas su blocked 1

    console.log(blockedBill);
    if (blockedBill) {
      setDisabled(true);
    } else {
      setDisabled(null);
    }
  };

  const unblockHandler = () => {
    const blockedBill = clientList.find((bill) => bill.id === props.bill.id);
    if (blockedBill) {
      setDisabled(false);
    }
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
