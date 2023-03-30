import { useContext } from "react";
import { Global } from "./Global";

function AddOver1000(props) {
  console.log(props);
  const { setAddOver1000, clientList, addOver1000 } = useContext(Global);

  const confirm = (_) => {
    const newTotalAmount = Number(props.bill.amount) + Number(props.newAmount);
    props.bill.amount =
      newTotalAmount >= 0 ? newTotalAmount : props.bill.amount;

    props.setEditData({
      number: parseInt(props.newAmount),
      amount: props.bill.amount,
      id: props.bill.id,
    });

    setAddOver1000(null);
  };
  //   const updatedBill = clientList.map((bill) => {
  //     if (bill.id !== props.bill.id) return bill;

  //     const newTotalAmount = Number(bill.amount) + Number(addOver1000);
  //     bill.amount = newTotalAmount >= 0 ? newTotalAmount : bill.amount;

  //     return bill;
  //   });
  //   props.setEditData({
  //     number: parseInt(addOver1000),
  //     amount: props.bill.amount,
  //     id: props.bill.id,
  //   });

  //   props.setClientList(updatedBill);
  //   setAddOver1000(null);
  // };

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
          <button className="button" onClick={confirm}>
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
