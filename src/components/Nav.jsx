import { useContext } from "react";
import { Global } from "./Global";
import axios from "axios";

function Nav(props) {
  const { route, setRoute, authName, setAuthName, setLogged } =
    useContext(Global);

  const logOut = (_) => {
    axios
      .post("http://localhost:3003/logout", {}, { withCredentials: true })
      .then((res) => {
        setLogged(false);
        setAuthName(false);
        setRoute("home");
      });
  };
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
            <h4>{authName}</h4>
            <p className={props.btn} onClick={logOut}>
              Logout
            </p>
          </>
        ) : (
          <p className={props.btn} onClick={() => setRoute("login")}>
            Login
          </p>
        )}
      </div>
    </div>
  );
}

export default Nav;
