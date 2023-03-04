import { v4 as uuidv4 } from "uuid";

function DeleteBtn(props) {
  // const deleteBillHandler = (id) => {
  //   props.setNewBill((b) =>
  //     props.amount === 0 ? b.filter((b) => b.id !== props.id) : b
  //   );
  // };

  // const deleteBillHandler = () => {
  //   props.setDeleteForm((f) => [...f, { id: uuidv4() }]);
  // };

  const destroy = (_) => {
    props.setDeleteForm({
      id: uuidv4(),
    });
    props.setNewBill((b) =>
      props.amount === 0 ? b.filter((b) => b.id !== props.id) : b
    );
  };
  return (
    <button className={props.classes} onClick={destroy}>
      Delete
    </button>
  );
}

export default DeleteBtn;
