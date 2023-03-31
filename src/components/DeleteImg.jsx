import { useContext } from "react";
import { Global } from "./Global";
import { useFile } from "./useFile";

function DeleteImg(props) {
  const {
    deleteImg,
    setDelImg,
    clientList,
    setClientList,
    setEditImg,
    setCreateData,
  } = useContext(Global);

  const [file, readFile, remImage] = useFile();

  const deleteImgHandler = () => {
    // const updatedBill = clientList.map((bill) => {
    //   if (bill.id !== props.bill.id) return bill;

    setDelImg(true);

    props.setEditData({
      name: props.bill.name,
      surname: props.bill.surname,
      number: parseInt(props.newAmount),
      amount: props.bill.amount,
      id: props.bill.id,
      deleteImg,
    });
  };

  //   setEditImg({
  //     deleteImg,
  //   });

  //   return bill;
  // });

  // setClientList(updatedBill);

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
