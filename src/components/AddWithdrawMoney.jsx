function AddWithdrawMoney(props) {
  const validateAmount = () => {
    if (!props.amount) return alert("Invalid value");
    return !!props.amount;
  };

  const addMoneyHandler = () => {
    if (!validateAmount()) return;

    const updatedBill = props.newBill.map((bill) => {
      if (bill.id !== props.id) return bill;

      const newAmount = Number(bill.amount) + Number(props.amount);
      bill.amount = newAmount >= 0 ? newAmount : bill.amount;

      return bill;
    });

    props.setNewBill(updatedBill);
  };

  const withdrawMoneyHandler = () => {
    if (!validateAmount()) return;

    const updatedBill = props.newBill.map((bill) => {
      if (bill.id !== props.id) return bill;

      const newAmount = Number(bill.amount) - Number(props.amount);
      const isNewAmountValid = newAmount >= 0;

      if (isNewAmountValid) {
        bill.amount = newAmount >= 0 ? newAmount : bill.amount;
      }

      return bill;
    });
    props.setNewBill(updatedBill);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div>
          <button className={props.classes} onClick={addMoneyHandler}>
            Add &euro;
          </button>
          <input
            type="number"
            value={props.amount}
            style={{
              height: "50px",
              width: "250px",
              fontSize: "30px",
              marginLeft: "10px",
              marginRight: "10px",
            }}
            onChange={(e) => props.setAmount(e.target.value)}
          ></input>

          <button className={props.classes} onClick={withdrawMoneyHandler}>
            Withdraw &euro;
          </button>
          <p>Total: {props.bill.amount} &euro;</p>
        </div>
      </div>
    </>
  );
}

export default AddWithdrawMoney;
