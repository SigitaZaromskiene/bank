function CurrentBalance(props) {
  console.log(props);
  const getTotalAmount = () => {
    return props.newBill.reduce((acc, curr) => acc + Number(curr.amount), 0);
  };

  return (
    <div className={props.className}>
      Total amount: {getTotalAmount()} &euro;
    </div>
  );
}

export default CurrentBalance;
