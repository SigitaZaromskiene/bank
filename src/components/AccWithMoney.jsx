function AccWithMoney(props) {
  const getTotalAmount = () => {
    const av = props.clientList.reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    );
    return av / props.clientList.length;
  };

  return (
    <div className={props.className}>
      Accounts with money: {getTotalAmount().toFixed(2, 0)} &euro;
    </div>
  );
}

export default AccWithMoney;
