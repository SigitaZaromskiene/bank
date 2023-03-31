import { useContext } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";

function DeleteImg(props) {
  const { deleteImg, setDelImg, clientList, setClientList } =
    useContext(Global);

  const { remImage } = useFile();

  const deleteImgHandler = () => {
    const updatedBill = clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;

      props.setEditData({
        amount: props.bill.amount,
        id: props.bill.id,
        deleteImg,
      });

      return bill;
    });

    setDelImg(true);
    setClientList(updatedBill);
  };

  return (
    <>
      {props.bill.image !== null ? (
        <button
          onClick={deleteImgHandler}
          disabled={props.bill.blocked}
          className={props.classes}
        >
          Delete image
        </button>
      ) : null}
    </>
  );
}

export default DeleteImg;
