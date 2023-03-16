import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import Login from "./Login";
import { Global } from "./Global";
import ErrorMsg from "./ErrorMsg";

function Auth({ children }) {
  const [logged, setLogged] = useState(null);

  const { setAuthName } = useContext(Global);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "ok") {
          setLogged(true);
          setAuthName(res.data.name);
        } else {
          setLogged(false);
          setAuthName(null);
        }
      });
  }, []);

  if (logged === null) {
    return <Loader></Loader>;
  }
  if (logged === true) {
    return <>{children}</>;
  }

  if (logged === false) {
    return (
      <>
        <ErrorMsg />
        <Login></Login>
      </>
    );
  }
}

export default Auth;
