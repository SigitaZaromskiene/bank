import "./App.scss";
import AddNewBillForm from "./components/AddNewBillForm";
import { useEffect, useState } from "react";
import Bill from "./components/Bill";
import { v4 as uuidv4 } from "uuid";
import ClientsNumber from "./components/ClientsNumber";
import CurrentBalance from "./components/CurrentBalance";
import SortBtn from "./components/SortBtn";
import { create, destroy } from "./components/localStorage";
import Messages from "./components/Messages";

const KEY = "bill";

function App() {
  const [newBill, setNewBill] = useState([]);
  const [addNewName, setAddNewName] = useState([]);
  const [addNewSurname, setAddNewSurname] = useState([]);
  const [createData, setCreateData] = useState(null);
  const [messages, setMessages] = useState(null);
  const [deleteForm, setDeleteForm] = useState(null);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    create(KEY, createData);
    msg("The new bill is created", "ok");
  }, [createData]);

  useEffect(() => {
    if (null === deleteForm) {
      return;
    }
    destroy(KEY, deleteForm.id);
    msg("The bill was deleted", "ok");
  }, [deleteForm]);

  const msg = (text, type) => {
    const uuid = uuidv4();
    setMessages((m) => [...(m ?? []), { text, type, id: uuid }]);
    setTimeout(() => {
      setMessages((m) => m.filter((m) => uuid !== m.id));
    }, 3000);
  };

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
          setCreateData={setCreateData}
          addNewName={addNewName}
          addNewSurname={addNewSurname}
          setAddNewName={setAddNewName}
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
            setDeleteForm={setDeleteForm}
            deleteForm={deleteForm}
          ></Bill>
        ))}
        <SortBtn classes="button" setNewBill={setNewBill}></SortBtn>
      </main>
      {messages && <Messages messages={messages} />}
    </div>
  );
}

export default App;
