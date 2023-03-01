function DeleteBtn(props) {
  const deleteBillHandler = (id) => {
    props.setNewBill((b) =>
      props.amount === 0 ? b.filter((b) => b.id !== props.id) : b
    );
  };
  return <button onClick={deleteBillHandler}>Delete</button>;
}

export default DeleteBtn;
