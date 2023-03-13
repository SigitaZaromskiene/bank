import { useState, useCallback, useEffect } from "react";
import ClientsNumber from "./ClientsNumber";
import CurrentBalance from "./CurrentBalance";
import { v4 as uuidv4 } from "uuid";
import Bill from "./Bill";
import AddNewBillForm from "./AddNewBillForm";

function LoggedInBills(props) {
  const sortArrOfObjByProp = (arr, propName) => {
    return arr.sort((a, b) => a[propName].localeCompare(b[propName]));
  };

  const [filteredClients, setFilteredClients] = useState([]);

  const filterClient = useCallback(
    (filterType) => {
      let filteredList = props.clientList;

      if (filterType === "with") {
        filteredList = props.clientList.filter(({ amount }) => amount);
      }
      if (filterType === "without") {
        filteredList = props.clientList.filter(({ amount }) => !amount);
      }

      setFilteredClients(filteredList);
    },
    [props.clientList]
  );

  useEffect(() => {
    filterClient();
  }, [filterClient]);

  return (
    <div className="App">
      <header className="App-header">
        <ClientsNumber
          className="header"
          clientList={props.clientList}
        ></ClientsNumber>
        <CurrentBalance
          className="header"
          clientList={props.clientList}
        ></CurrentBalance>
      </header>
      <AddNewBillForm
        clientList={props.clientList}
        setClientList={props.setClientList}
        form="form"
        btn="button"
        billContainer="bill-container"
        flex="flex"
        modal="modal"
        setLastStateUpdate={props.setLastStateUpdate}
      ></AddNewBillForm>
      {sortArrOfObjByProp(filteredClients, "surname").map((b) => (
        <Bill
          key={uuidv4()}
          text={b}
          billContainer="bill-container"
          classes="button"
          total={b.total}
          setClientList={props.setClientList}
          clientList={props.clientList}
          bill="bill"
          add="button-add"
          totalClass="total"
          modal="modal"
          setDeleteData={props.setDeleteData}
          setEditData={props.setEditData}
        ></Bill>
      ))}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        <button className="button" onClick={() => filterClient("all")}>
          All
        </button>
        <button className="button" onClick={() => filterClient("with")}>
          With &euro;
        </button>
        <button className="button" onClick={() => filterClient("without")}>
          Without &euro;
        </button>
      </div>
    </div>
  );
}

export default LoggedInBills;
