import "./App.scss";
import { GlobalProvider } from "./components/Global";
import Routes from "./components/Routes";

function App() {
  return (
    <GlobalProvider>
      <Routes
        className="button"
        btn="hover"
        btnBig="button-big"
        headerBank="header-bank"
        class="options"
      ></Routes>
    </GlobalProvider>
  );
}

export default App;
