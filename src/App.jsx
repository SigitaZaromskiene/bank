import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useState } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [newBill, setNewBill] = useState([]);
  const [addNewBill, setAddNewBill] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <AddNewBillForm
          newBill={newBill}
          setNewBill={setNewBill}
          addNewBill={addNewBill}
          setAddNewBill={setAddNewBill}
          form="form"
          billContainer="bill-container"
        ></AddNewBillForm>
        {newBill.map((b) => (
          <Bill key={uuidv4()} text={b} billContainer="bill-container"></Bill>
        ))}
      </header>
    </div>
  );
}

export default App;
