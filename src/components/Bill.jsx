function Bill(props) {
  return (
    <div className={props.billContainer}>
      <div>{props.text}</div>
    </div>
  );
}

export default Bill;
