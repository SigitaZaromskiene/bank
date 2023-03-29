import { useFile } from "./useFile";
import { useState } from "react";

function ChangeBtn(props) {
  const [file, readFile, remImage] = useFile();
  const [editImgModal, setImgModal] = useState(false);

  const changeImg = () => {
    setImgModal(true);
  };
  return (
    <>
      <div>
        <button
          disabled={props.bill.blocked}
          className={props.classes}
          onClick={changeImg}
        >
          Edit img
        </button>
      </div>
      {editImgModal ? (
        <div className="login-box">
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label>Please select photo</label>
              <input
                type="file"
                style={{ border: "1px solid black", padding: "5px" }}
              />
            </div>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "20px" }}
            >
              <button className="button">Submit</button>

              <button className="button" onClick={() => setImgModal(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : null}
      <div />
    </>
  );
}

export default ChangeBtn;
