import { useContext, useEffect } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";
import Auth from "./Auth";
import Home from "./Home";

function Routes(props) {
  const { route } = useContext(Global);

  switch (route) {
    case "home":
      return (
        <Auth>
          <Home
            headerBank={props.headerBank}
            clientList={props.clientList}
            setClientList={props.setClientList}
          />
        </Auth>
      );
    case "bills":
      return (
        <Auth>
          <LoggedInBills
            clientList={props.clientList}
            setClientList={props.setClientList}
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
