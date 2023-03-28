import { useContext } from "react";
import { Global } from "./Global";

function AddOver1000(props) {
  const { setAddOver1000, clientList, addOver1000 } = useContext(Global);

  const add = (_) => {
    const updatedBill = clientList.map((bill) => {
      if (bill.id !== props.bill.id) return bill;
      else {
        const newTotalAmount = Number(bill.amount) + Number(addOver1000);
        bill.amount = newTotalAmount >= 0 ? newTotalAmount : bill.amount;

        props.setEditData({
          number: parseInt(addOver1000),
          amount: props.bill.amount,
          id: props.bill.id,
        });

        return bill;
      }
    });

    props.setClientList(updatedBill);
    setAddOver1000(null);
  };

  return (
    <div className="modalA">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          fontSize: "20px",
        }}
      >
        Are you sure you want to add money?
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button className="button" onClick={add}>
            Confirm
          </button>
          <button className="button" onClick={() => setAddOver1000(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOver1000;
