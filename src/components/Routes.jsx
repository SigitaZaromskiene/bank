import { useContext } from "react";
import { Global } from "./Global";
import LoggedInBills from "./LoggedInBills";
import Login from "./Login";

function Routes(props) {
  const { route } = useContext(Global);

  switch (route) {
    case "bills":
      return (
        <LoggedInBills
          clientList={props.clientList}
          setClientList={props.setClientList}
          setLastStateUpdate={props.setLastStateUpdate}
          setDeleteData={props.setDeleteData}
          setEditData={props.setEditData}
        ></LoggedInBills>
      );
    case "login":
      return <Login btn={props.btn}></Login>;
    default:
      return null;
  }
}

export default Routes;
