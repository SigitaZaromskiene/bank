import { useState } from "react";

function BlockBtn(props) {
  const [modal, setModal] = useState({
    class: "hidden",
    msg: "",
    color: "",
  });

  const blockHandler = () => {
    props.setBlockUser({
      id: props.bill.id,
      isBlocked: props.bill.blocked ? 0 : 1,
    });
  };

  return (
    <>
      {!props.bill.blocked ? (
        <>
          <button
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
      ) : (
        <>
          <button
            className={props.classes}
            onClick={blockHandler}
            style={{ color: "darkRed" }}
          >
            Unblock
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
