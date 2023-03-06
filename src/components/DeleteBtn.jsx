function DeleteBtn(props) {
  const deleteHandler = () => {
    if (props.bill.amount !== 0) {
      alert("Cannot delete bill with not empty funds");
      return;
    }

    props.setNewBill((bill) => bill.filter((bill) => bill.id !== props.id));
  };

  return (
    <button className={props.classes} onClick={deleteHandler}>
      Delete
    </button>
  );
}

export default DeleteBtn;
