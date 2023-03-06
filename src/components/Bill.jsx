import DeleteBtn from "./DeleteBtn";
import { useState } from "react";
import AddWithdrawMoney from "./AddWithdrawMoney";

function Bill(props) {
  const [amount, setAmount] = useState(0);

  return (
    <div className={props.billContainer}>
      <div className={props.bill}>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            gap: "8px",
            justifyContent: "center",
          }}
        >
          <p>{props.text.name}</p>
          <p>{props.text.surname}</p>
        </div>
        <AddWithdrawMoney
          flex={props.flex}
          classes={props.classes}
          amount={amount}
          setAmount={setAmount}
          newBill={props.newBill}
          setNewBill={props.setNewBill}
          id={props.id}
          bill={props.text}
          setMessages={props.setMessages}
          messages={props.messages}
          add={props.add}
          totalClass={props.totalClass}
          modal={props.modal}
        ></AddWithdrawMoney>
        <DeleteBtn
          setNewBill={props.setNewBill}
          id={props.id}
          bill={props.text}
          amount={amount}
          classes={props.classes}
          setAddNewName={props.setAddNewName}
          setAddNewSurname={props.setAddNewSurname}
          setDeleteForm={props.setDeleteForm}
          modal="modal"
        />
      </div>
    </div>
  );
}

export default Bill;
