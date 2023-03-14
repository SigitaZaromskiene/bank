import { useContext } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";

function Routes(props) {
  const { route } = useContext(Global);

  switch (route) {
    case "bills":
      return <LoggedInBills></LoggedInBills>;
    case "login":
      return <Login btn={props.btn}></Login>;
    default:
      return null;
  }
}

export default Routes;
