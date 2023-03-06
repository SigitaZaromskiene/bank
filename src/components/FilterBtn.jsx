function FilterBtn(props) {
  const filterHandler = () => {
    props.setClientList((a) =>
      props.amount === 0 ? a.filter((b) => b.id !== props.id) : a
    );
  };
  return (
    <button className={props.classes} onClick={filterHandler}>
      Filter
    </button>
  );
}

export default FilterBtn;
