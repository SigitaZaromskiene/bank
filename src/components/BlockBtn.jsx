import { useState } from "react";

function BlockBtn(props) {
  console.log(props);
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
      {props.bill.blocked === 1 ? (
        <>
          <button
            className={props.classes}
            onClick={blockHandler}
            style={{ color: "darkRed" }}
          >
            Unblock
          </button>
        </>
      ) : (
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
      )}
    </>
  );
}

export default BlockBtn;
