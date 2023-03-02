function TotalAmount(props) {
  console.log(props);
  //   const sum = props.setAmount((a) => [...a].reduce((acc, a) => acc + a, 0));
  return <div>{props.amount}</div>;
}

export default TotalAmount;
