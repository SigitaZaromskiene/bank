function CurrentBalance(props) {
  return (
    <h2 className={props.className}>Total amount: {props.amount} &euro;</h2>
  );
}

export default CurrentBalance;
