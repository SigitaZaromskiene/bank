import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useEffect, useState } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";
import ClientsNumber from "./components/ClientsNumber";
import CurrentBalance from "./components/CurrentBalance";
import SortBtn from "./components/SortBtn";
import FilterBtn from "./components/FilterBtn";

function App() {
  const [clientList, setClientList] = useState(
    JSON.parse(localStorage.getItem("newBills")) || []
  );

  useEffect(
    () => localStorage.setItem("newBills", JSON.stringify(clientList)),
    [clientList]
  );

  return (
    <div className="App">
      <header className="App-header">
        <ClientsNumber
          className="header"
          clientList={clientList}
        ></ClientsNumber>
        <CurrentBalance
          className="header"
          clientList={clientList}
        ></CurrentBalance>
      </header>
      <AddNewBillForm
        clientList={clientList}
        setClientList={setClientList}
        form="form"
        btn="button"
        billContainer="bill-container"
        flex="flex"
        modal="modal"
      ></AddNewBillForm>
      {clientList.map((b) => (
        <Bill
          key={uuidv4()}
          text={b}
          billContainer="bill-container"
          classes="button"
          total={b.total}
          setClientList={setClientList}
          clientList={clientList}
          bill="bill"
          add="button-add"
          totalClass="total"
          modal="modal"
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
        <SortBtn classes="button" setClientList={setClientList}></SortBtn>
        <FilterBtn classes="button" setClientList={setClientList}></FilterBtn>
      </div>
    </div>
  );
}

export default App;
