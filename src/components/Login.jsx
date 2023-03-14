import { useContext, useState, useEffect } from "react";
import axios from "axios";

function Login(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3033/login", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#f4f6f9",
          marginTop: "60px",
          padding: "20px 40px",
          border: "1px solid black",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          {error ? (
            <span style={{ color: "crimson" }}>Login Error</span>
          ) : (
            <span>Login</span>
          )}
        </div>
        <div>
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
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "20px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "28px",
              }}
            >
              <label style={{ marginRight: "10px", fontSize: "20px" }}>
                Name
              </label>
              <input
                type="text"
                style={{ padding: "5px 10px", fontSize: "20px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <label style={{ marginRight: "10px", fontSize: "20px" }}>
                Password
              </label>
              <input
                type="password"
                style={{ padding: "5px 10px", fontSize: "20px" }}
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          style={{
            marginTop: "40px",
            marginLeft: "100px",
          }}
          className={props.btn}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
