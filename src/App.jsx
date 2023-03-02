import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useEffect, useState } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";
import ClientsNumber from "./components/ClientsNumber";
import CurrentBalance from "./components/CurrentBalance";
import SortBtn from "./components/SortBtn";
import { create } from "./components/localStorage";

const KEY = "bill";

function App() {
  const [newBill, setNewBill] = useState([]);
  const [addNewName, setAddNewName] = useState([]);
  const [addNewSurname, setAddNewSurname] = useState([]);
  const [createData, setCreateData] = useState(null);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(KEY, createData);
  }, [createData]);

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
            total={b.total}
            surName={b.surname}
            setNewBill={setNewBill}
            setCreateData={setCreateData}
          ></Bill>
        ))}
        <SortBtn classes="button" setNewBill={setNewBill}></SortBtn>
      </main>
    </div>
  );
}

export default App;
