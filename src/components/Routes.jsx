import { useContext, useState } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";
import Auth from "./Auth";
import Home from "./Home";
import Nav from "./Nav";

function Routes(props) {
  const { route } = useContext(Global);

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
