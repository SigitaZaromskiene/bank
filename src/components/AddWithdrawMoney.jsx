function AddWithdrawMoney(props) {
  const submitAmountHandler = (e) => {
    props.setSubmitAmount(e.target.value > 0 ? e.target.value : 0);
  };

  // const addMoneyHandler = () => {
  //   props.setAmount((b) => [
  //     ...b,
  //     {
  //       total: Number(a) + Number(props.submitAmount)
  //     },
  //   ]);
  const addMoneyHandler = () => {
    props.setAmount((a) => Number(a) + Number(props.submitAmount));
    props.setSubmitAmount("");
  };

  const withdrawMoneyHandler = () => {
    props.setAmount((a) =>
      Number(a) >= Number(props.submitAmount)
        ? Number(a) - Number(props.submitAmount)
        : Number(a)
    );
    props.setSubmitAmount("");
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <button className={props.classes} onClick={addMoneyHandler}>
            Add money
          </button>
          <input
            type="number"
            value={props.submitAmount}
            style={{
              height: "50px",
              width: "250px",
              fontSize: "30px",
            }}
            onChange={submitAmountHandler}
          ></input>

          <button className={props.classes} onClick={withdrawMoneyHandler}>
            Withdraw money
          </button>
          <p>Total: {props.amount} &euro;</p>
        </div>
      </div>
    </>
  );
}

export default AddWithdrawMoney;
