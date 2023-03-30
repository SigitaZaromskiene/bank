import { useContext, useEffect } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";

function DeleteImg(props) {
  // const { setDelImg } = useContext(Global);

  // const { remImage } = useFile();
  // const deleteImgHandler = () => {
  //   setDelImg(true);
  //   remImage();
  // };

  return (
    <>
      <button disabled={props.bill.blocked} className={props.classes}>
        Delete img
      </button>
    </>
  );
}

export default DeleteImg;
