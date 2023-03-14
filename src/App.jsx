import "./App.scss";
import { Global } from "./components/Global";
import { GlobalProvider } from "./components/Global";
import Routes from "./components/Routes";
import Nav from "./components/Nav";

// const URL = "http://localhost:3003/bills";

function App() {
  // const [clientList, setClientList] = useState([]);
  // const [deleteData, setDeleteData] = useState(null);
  // const [editData, setEditData] = useState(null);

  // const [lastStateUpdate, setLastStateUpdate] = useState(Date.now());

  // useEffect(() => {
  //   axios.get(URL).then((res) => {
  //     setClientList(res.data);
  //   });
  // }, [lastStateUpdate]);

  // useEffect(() => {
  //   if (deleteData === null) {
  //     return;
  //   }
  //   axios
  //     .delete(URL + "/" + deleteData.id)
  //     .then((res) => setLastStateUpdate(Date.now()));
  // }, [deleteData]);

  // useEffect(() => {
  //   if (null === editData) {
  //     return;
  //   }

  //   console.log(editData);

  //   axios
  //     .put(URL + "/" + editData.action + "/" + editData.id, {
  //       number: editData.number,
  //     })
  //     .then((res) => {
  //       setLastStateUpdate(Date.now());
  //     });
  // }, [editData]);

  // const sortArrOfObjByProp = (arr, propName) => {
  //   return arr.sort((a, b) => a[propName].localeCompare(b[propName]));
  // };

  // const [filteredClients, setFilteredClients] = useState([]);

  // const filterClient = useCallback(
  //   (filterType) => {
  //     let filteredList = clientList;

  //     if (filterType === "with") {
  //       filteredList = clientList.filter(({ amount }) => amount);
  //     }
  //     if (filterType === "without") {
  //       filteredList = clientList.filter(({ amount }) => !amount);
  //     }

  //     setFilteredClients(filteredList);
  //   },
  //   [clientList]
  // );

  // useEffect(() => {
  //   filterClient();
  // }, [filterClient]);

  // useEffect(
  //   () => localStorage.setItem("newBills", JSON.stringify(clientList)),
  //   [clientList]
  // );

  return (
    <GlobalProvider>
      <Nav class="nav" btn="button"></Nav>

      <Routes btn="button"></Routes>
    </GlobalProvider>
  );
}

export default App;
