function ClientsNumber(props) {
  return (
    <div className={props.className}>
      Clients number: {props.newBill.length}
    </div>
  );
}

export default ClientsNumber;
