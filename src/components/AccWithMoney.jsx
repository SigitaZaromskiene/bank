function AccWithMoney(props) {
  const getSumAcc = () => {
    const empty = props.clientList.filter((acc) => acc.amount > 0);

    return empty.length;
  };

  return (
    <div className={props.className}>Accounts with balance: {getSumAcc()}</div>
  );
}

export default AccWithMoney;
