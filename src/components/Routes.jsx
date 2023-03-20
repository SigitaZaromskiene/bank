import { useContext, useState, useEffect } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";
import Auth from "./Auth";
import Home from "./Home";
import Nav from "./Nav";
import axios from "axios";

function Routes(props) {
  const { route } = useContext(Global);

  const { setAuthName, setLogged } = useContext(Global);

  useEffect(() => {
    axios
      .get("http://localhost:3003/login", { withCredentials: true })
      .then((res) => {
        if (res.data.status === "ok") {
          setLogged(true);
          setAuthName(res.data.name);
        } else {
          setLogged(false);
          setAuthName(null);
        }
      });
  }, [setAuthName, setLogged]);

  const [clientList, setClientList] = useState([]);

  const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());

  switch (route) {
    case "home":
      return (
        <>
          <Nav class="nav" btn="hover"></Nav>
          <Home
            headerBank={props.headerBank}
            clientList={clientList}
            setClientList={setClientList}
            lastStateUpdate={lastStateUpdate}
            setLastStateUpdate={setLastStateUpdate}
          />
        </>
      );

    case "bills":
      return (
        <Auth>
          <Nav class="nav" btn="hover"></Nav>
          <LoggedInBills
            clientList={clientList}
            setClientList={setClientList}
            lastStateUpdate={lastStateUpdate}
            setLastStateUpdate={setLastStateUpdate}
          ></LoggedInBills>
        </Auth>
      );

    case "login":
      return <Login btn={props.className}></Login>;
    default:
      return null;
  }
}

export default Routes;
