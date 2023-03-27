function AddOver1000(props) {
  return (
    <div className="modal">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          fontSize: "20px",
        }}
      >
        Are you sure you want to add money?
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button className="button">Confirm</button>
          <button className="button" onClick={null}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOver1000;
