import "./App.scss";
import Nav from "./components/Nav";
import { GlobalProvider } from "./components/Global";

import Routes from "./components/Routes";
import CookieMonster from "./components/CookieMonster";

function App() {
  return (
    <GlobalProvider>
      <CookieMonster></CookieMonster>
      <Nav className="nav" hover="hover"></Nav>

      <Routes btn="button"></Routes>
    </GlobalProvider>
  );
}

export default App;
