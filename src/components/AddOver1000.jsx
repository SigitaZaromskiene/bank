import { useContext } from "react";
import { Global } from "./Global";

function AddOver1000(props) {
  const { setAddOver1000 } = useContext(Global);
  return (
    <div className="modalA">
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
          <button
            className="button"
            onClick={() => setAddOver1000(props.newAmount)}
          >
            Confirm
          </button>
          <button className="button" onClick={() => setAddOver1000(null)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOver1000;
