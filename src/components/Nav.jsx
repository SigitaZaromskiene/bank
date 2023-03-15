import { useContext } from "react";
import { Global } from "./Global";

function Nav(props) {
  const { route, setRoute, authName } = useContext(Global);
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
        <button onClick={() => setRoute("bills")} className={props.btn}>
          Bills
        </button>
      </div>
      {authName ? (
        <>
          <h4 onClick={() => setRoute("login")}>{authName}</h4>
          <button className={props.btn} onClick={() => setRoute("login")}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => setRoute("login")}>Login</button>
      )}
      <div></div>
    </div>
  );
}

export default Nav;
