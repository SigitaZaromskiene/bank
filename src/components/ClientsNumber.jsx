function ClientsNumber(props) {
  return (
    <div className={props.className}>
      Clients number: {props.clientList.length}
    </div>
  );
}

export default ClientsNumber;
