function ClientsNumber(props) {
  return (
    <div className={props.className}>
      Total clients: {props.clientList.length}
    </div>
  );
}

export default ClientsNumber;
