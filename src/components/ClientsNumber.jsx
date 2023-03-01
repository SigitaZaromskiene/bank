function ClientsNumber(props) {
  return (
    <h2 className={props.className}>Clients number: {props.newBill.length}</h2>
  );
}

export default ClientsNumber;
