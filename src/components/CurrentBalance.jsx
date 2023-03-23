function CurrentBalance(props) {
  const getTotalAmount = () => {
    return props.clientList.reduce((acc, curr) => acc + Number(curr.amount), 0);
  };

  return (
    <div className={props.className}>
      Total amount: {getTotalAmount().toFixed(2, 0)} &euro;
    </div>
  );
}

export default CurrentBalance;
