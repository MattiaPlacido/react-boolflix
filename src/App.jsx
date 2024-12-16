//CONTEXT
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import "./App.css";

//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Main />
    </GlobalContextProvider>
  );
}

export default App;
