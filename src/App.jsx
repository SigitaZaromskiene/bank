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
  const [newBill, setNewBill] = useState(
    JSON.parse(localStorage.getItem("newBills")) || []
  );

  useEffect(
    () => localStorage.setItem("newBills", JSON.stringify(newBill)),
    [newBill]
  );

  return (
    <div className="App">
      <header className="App-header">
        <ClientsNumber className="header" newBill={newBill}></ClientsNumber>
        <CurrentBalance className="header" newBill={newBill}></CurrentBalance>
      </header>
      <AddNewBillForm
        newBill={newBill}
        setNewBill={setNewBill}
        form="form"
        btn="button"
        billContainer="bill-container"
        flex="flex"
      ></AddNewBillForm>
      {newBill.map((b) => (
        <Bill
          key={uuidv4()}
          id={b.id}
          text={b}
          billContainer="bill-container"
          classes="button"
          total={b.total}
          setNewBill={setNewBill}
          newBill={newBill}
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
        <SortBtn classes="button" setNewBill={setNewBill}></SortBtn>
        <FilterBtn classes="button" setNewBill={setNewBill}></FilterBtn>
      </div>
    </div>
  );
}

export default App;
