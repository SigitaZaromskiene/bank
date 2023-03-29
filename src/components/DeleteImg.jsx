import { useContext } from "react";
import { Global } from "./Global";

function DeleteImg(props) {
  const { setDelImg } = useContext(Global);
  const deleteImgHandler = () => {
    setDelImg(true);
  };

  return (
    <>
      <button
        disabled={props.bill.blocked}
        className={props.classes}
        onClick={deleteImgHandler}
      >
        Delete img
      </button>
    </>
  );
}

export default DeleteImg;
