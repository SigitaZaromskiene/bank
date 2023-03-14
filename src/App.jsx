import "./App.scss";
import Nav from "./components/Nav";
import { GlobalProvider } from "./components/Global";

import Routes from "./components/Routes";

function App() {
  return (
    <GlobalProvider>
      <Nav className="nav" hover="hover"></Nav>

      <Routes btn="button"></Routes>
    </GlobalProvider>
  );
}

export default App;
