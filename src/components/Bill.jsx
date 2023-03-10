import DeleteBtn from "./DeleteBtn";
import AddWithdrawMoney from "./AddWithdrawMoney";

function Bill(props) {
  return (
    <div className={props.billContainer}>
      <div className={props.bill}>
        <div
          style={{
            display: "flex",
            fontSize: "24px",
            gap: "8px",
            justifyContent: "center",
            width: "200px",
          }}
        >
          <p>{props.text.name}</p>
          <p>{props.text.surname}</p>
        </div>
        <AddWithdrawMoney
          clientList={props.clientList}
          setClientList={props.setClientList}
          bill={props.text}
          add={props.add}
          totalClass={props.totalClass}
          modal={props.modal}
        ></AddWithdrawMoney>
        <DeleteBtn
          setDeletedData={props.setDeletedData}
          setClientList={props.setClientList}
          bill={props.text}
          classes={props.classes}
          modal="modal"
        />
      </div>
    </div>
  );
}

export default Bill;
