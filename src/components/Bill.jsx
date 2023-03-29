import DeleteBtn from "./DeleteBtn";
import AddWithdrawMoney from "./AddWithdrawMoney";
import BlockBtn from "./BlockBtn";
import ChangeBtn from "./ChangeBtn";
import { useFile } from "./useFile";

function Bill(props) {
  const [file, remImage] = useFile();
  return (
    <>
      <div className={props.billContainer}>
        <div className={props.bill}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "22px",
                gap: "8px",
                justifyContent: "center",
                width: "260px",
              }}
            >
              <p>{props.text.name}</p>
              <p>{props.text.surname}</p>
            </div>
            <div>
              <div>
                {file ? (
                  <img className="list-image" src={file} alt="addphoto" />
                ) : null}
              </div>
            </div>
            <div
              style={{ display: "flex", gap: "10px", flexDirection: "column" }}
            >
              <DeleteBtn
                setDeletedData={props.setDeleteData}
                setClientList={props.setClientList}
                bill={props.text}
                classes={props.classes}
                modal="modal"
                blockUser={props.blockUser}
              />
              <BlockBtn
                setDeletedData={props.setDeletedData}
                setClientList={props.setClientList}
                setBlockUser={props.setBlockUser}
                bill={props.text}
                classes={props.classes}
                modal="modal"
                blockUser={props.blockUser}
              />
              <ChangeBtn
                setDeletedData={props.setDeletedData}
                setClientList={props.setClientList}
                bill={props.text}
                classes={props.classes}
                modal="modal"
                onClick={remImage}
              />
            </div>
          </div>

          <div>
            <AddWithdrawMoney
              clientList={props.clientList}
              setClientList={props.setClientList}
              bill={props.text}
              add={props.add}
              totalClass={props.totalClass}
              modal={props.modal}
              setEditData={props.setEditData}
            ></AddWithdrawMoney>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
