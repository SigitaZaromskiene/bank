import { useContext } from "react";
import { Global } from "./Global";

function BlockBtn(props) {
  const { disabled, setDisabled } = useContext(Global);

  const blockHandler = () => {
    setDisabled(true);

    //  props.setChangePhoto(null);
  };

  const unblockHandler = () => {
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
        </>
      )}
    </>
  );
}

export default BlockBtn;
