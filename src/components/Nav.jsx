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
        <h3 style={{ color: "#161616" }}>Bank app</h3>
        <p className={props.btn} onClick={() => setRoute("home")}>
          Home
        </p>
        <p className={props.btn} onClick={() => setRoute("bills")}>
          Bills
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {authName ? (
          <>
            <h4 onClick={() => setRoute("login")}>{authName}</h4>
            <p className={props.btn} onClick={() => setRoute("login")}>
              Logout
            </p>
          </>
        ) : (
          <p onClick={() => setRoute("login")}>Login</p>
        )}
      </div>
    </div>
  );
}

export default Nav;
