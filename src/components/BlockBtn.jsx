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
            style={{ color: "darkRed", fontWeight: "600" }}
          >
            Block
          </button>
        </>
      ) : (
        <>
          <button
            className={props.classes}
            onClick={blockHandler}
            style={{ color: "darkRed", fontWeight: "600" }}
          >
            Unblock
          </button>
        </>
      )}
    </>
  );
}

export default BlockBtn;
