function EmptyAcc(props) {
  const getEmptyAcc = () => {
    const empty = props.clientList.filter((acc) => acc.amount === 0);

    return empty.length;
  };

  return (
    <div className={props.className}>
      Accounts with empty balance: {getEmptyAcc()}
    </div>
  );
}

export default EmptyAcc;
