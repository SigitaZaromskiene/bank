import { useContext, useState, useEffect } from "react";
import axios from "axios";

function Login(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setUserName(res.data.name);
        }
      });
  }, []);

  //   const { setLogged, setAuthName } = useContext(Global);

  const login = (_) => {
    axios
      .post(
        "http://localhost:3003/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setUserName(res.data.name);
          setName("");
          setPsw("");
          setError(null);
          //   setLogged(true);
          //   setAuthName(res.data.name);
        } else {
          setError(true);
          setUserName(null);
        }
      });
  };

  return (
    <div
      style={{
        display: "flex",
        height: "70vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#f4f6f9",

          padding: "20px 40px",
          border: "1px solid black",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          {error ? (
            <span style={{ color: "red" }}>Login Error</span>
          ) : (
            <span style={{ color: "#653c28", fontWeight: "500" }}>Login</span>
          )}
        </div>

        <h5 style={{ textAlign: "center", fontSize: "20px" }}>
          {userName ? (
            <span>Hello, {userName}</span>
          ) : (
            <span>Hello, guest</span>
          )}
        </h5>
        <div
          style={{
            display: "flex",
            flexDirection: "column",

            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <label
              style={{
                fontSize: "20px",
                color: "#653c28",
                fontWeight: "500",
                width: "30%",
              }}
            >
              Name
            </label>
            <input
              type="text"
              style={{ padding: "5px 10px", fontSize: "20px", width: "80%" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              gap: "15px",
            }}
          >
            <label
              style={{
                fontSize: "20px",
                color: "#653c28",
                fontWeight: "500",
                width: "30%",
              }}
            >
              Password
            </label>
            <input
              type="password"
              style={{
                padding: "5px 10px",
                fontSize: "20px",
                marginBottom: "50px",
                width: "80%",
              }}
              value={psw}
              onChange={(e) => setPsw(e.target.value)}
            />
          </div>
        </div>

        <button className={props.btn} onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
