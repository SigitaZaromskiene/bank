import { useContext, useEffect } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";
import Auth from "./Auth";

function Routes(props) {
  const { route } = useContext(Global);

  switch (route) {
    case "bills":
      return (
        <Auth>
          <LoggedInBills></LoggedInBills>
        </Auth>
      );
    case "login":
      return <Login btn={props.btn}></Login>;
    default:
      return null;
  }
}

export default Routes;
