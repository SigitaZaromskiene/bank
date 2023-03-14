import { useContext } from "react";
import { Global } from "./Global";

function Nav(props) {
  const { route, setRoute } = useContext(Global);
  return (
    <div className={props.class}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        <h3>Bank app</h3>
        <button
          onClick={() => setRoute("bills")}
          className={props.btn + (route === "bills" ? "active" : "")}
        >
          Bills
        </button>
      </div>
      <div>
        <button
          className={props.btn + (route === "login" ? "active" : "")}
          onClick={() => setRoute("login")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Nav;
