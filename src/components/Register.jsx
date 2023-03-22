import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Global } from "./Global";

function Register(props) {
  const [userName, setUserName] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const [psw2, setPsw2] = useState("");

  const { setRoute, setLogged, setAuthName } = useContext(Global);

  const [modal, setModal] = useState({ class: "hidden", msg: "", color: "" });

  const register = (_) => {
    if (psw !== psw2) {
      setModal({
        class: "visible",
        msg: "Password mismatch",
        color: "red",
      });
      setTimeout(() => {
        setModal({ class: "hidden", msg: "", color: "" });
      }, 2000);
      return;
    }

    axios
      .post(
        "http://localhost:3003/register",
        { name, psw },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setName("");
          setPsw("");
          setPsw2("");
          setError(null);

          //   setModal({
          //     class: "visible",
          //     msg: "Please enter correct details",
          //     color: "red",
          //   });
          //   setTimeout(() => {
          //     setModal({ class: "hidden", msg: "", color: "" });
          //   }, 2000);
          //   return;
          // }

          // setRoute("home");
        } else {
          setError(true);

          //   setModal({
          //     class: "visible",
          //     msg: "Please enter correct details",
          //     color: "red",
          //   });
          //   setTimeout(() => {
          //     setModal({ class: "hidden", msg: "", color: "" });
          //   }, 2000);
          //   return;
          // }
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
          <div
            style={{
              textAlign: "center",
              fontSize: "24px",
              marginBottom: "40px",
            }}
          >
            {error ? (
              <span style={{ color: "red" }}>{error}</span>
            ) : (
              <span
                style={{
                  color: "#653c28",
                  fontWeight: "500",
                }}
              >
                Register form
              </span>
            )}
          </div>
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

                  width: "80%",
                }}
                value={psw}
                onChange={(e) => setPsw(e.target.value)}
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
                Repeat Password
              </label>
              <input
                type="password"
                style={{
                  padding: "5px 10px",
                  fontSize: "20px",
                  marginBottom: "50px",
                  width: "80%",
                }}
                value={psw2}
                onChange={(e) => setPsw2(e.target.value)}
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
            onClick={register}
          >
            Register
          </button>
        </div>

        <div className={`${modal.class} modal`}>
          <p style={{ backgroundColor: modal.color }}>{modal.msg} </p>
        </div>
      </div>
    </>
  );
}

export default Register;
