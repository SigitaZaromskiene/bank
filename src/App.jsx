import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useState } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";
import ClientsNumber from "./components/ClientsNumber";
import CurrentBalance from "./components/CurrentBalance";
import SortBtn from "./components/SortBtn";

function App() {
  const [newBill, setNewBill] = useState([]);
  const [addNewName, setAddNewName] = useState([]);
  const [addNewSurname, setAddNewSurname] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <ClientsNumber
          className="header"
          newBill={newBill}
          headerContainer="header-container"
        ></ClientsNumber>
        <CurrentBalance className="header"></CurrentBalance>
      </header>
      <main>
        <AddNewBillForm
          newBill={newBill}
          setNewBill={setNewBill}
          form="form"
          btn="button"
          billContainer="bill-container"
          addNewName={addNewName}
          setAddNewName={setAddNewName}
          addNewSurname={addNewSurname}
          setAddNewSurname={setAddNewSurname}
        ></AddNewBillForm>
        {newBill.map((b) => (
          <Bill
            key={uuidv4()}
            id={b.id}
            text={b}
            billContainer="bill-container"
            classes="button"
            name={b.name}
            surName={b.surname}
            setNewBill={setNewBill}
          ></Bill>
        ))}
        <SortBtn classes="button" setNewBill={setNewBill}></SortBtn>
      </main>
    </div>
  );
}

export default App;
