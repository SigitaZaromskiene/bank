import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Global } from "./Global";

function Login(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");

  const { setRoute, setLogged, setAuthName } = useContext(Global);

  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/login", { withCredentials: true })
  //     .then((res) => {
  //       console.log(res.data);
  //       // if (res.data.status === "ok") {
  //       //   setUserName(res.data.name);
  //       // }
  //     });
  // }, []);

  // const { setLogged, setAuthName } = useContext(Global);

  const login = (_) => {
    axios
      .post(
        "http://localhost:3003/login",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.status === "ok") {
          setUserName(res.data.name);
          setName("");
          setPsw("");
          setError(null);
          setLogged(1);
          setAuthName(res.data.name);
          setRoute("home");
        } else {
          setError(true);
          setUserName(null);
          setModal({
            class: "visible",
            msg: "Please enter correct details",
            color: "red",
          });
          setTimeout(() => {
            setModal({ class: "hidden", msg: "", color: "" });
          }, 2000);
          return;
        }
      });
  };

  return (
    <>
      <button
        style={{
          textAlign: "center",
          width: "150px",
          padding: "10px",
          background: "none",
          borderRadius: "15px",
          cursor: "pointer",
          color: "#653c28",
          fontWeight: "600",
          border: "1px solid #653c28",
        }}
        onClick={() => setRoute("home")}
      >
        {" "}
        &larr; &nbsp; Home page
      </button>
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
            <span>Hello, guest</span>
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

          <button
            style={{
              textAlign: "center",
              width: "150px",
              padding: "10px",
              background: "none",
              borderRadius: "15px",
              cursor: "pointer",
              color: "#653c28",
              fontWeight: "600",
              border: "1px solid #653c28",
            }}
            onClick={login}
          >
            Login
          </button>
        </div>

        <div className={`${modal.class} modal`}>
          <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
        </div>
      </div>
    </>
  );
}

export default Login;
