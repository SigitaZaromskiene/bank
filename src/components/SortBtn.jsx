function SortBtn(props) {
  const sortHandler = () => {
    props.setNewBill((a) =>
      [...a].sort((a, b) => a.surname.localeCompare(b.surname))
    );
  };
  return (
    <button className={props.classes} onClick={sortHandler}>
      Sort
    </button>
  );
}

export default SortBtn;
