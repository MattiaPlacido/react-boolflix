//CONTEXT
import { GlobalContextProvider } from "./contexts/GlobalContext.jsx";
import "./App.css";


//BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

//COMPONENTS
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <GlobalContextProvider>
      <Header />
      <Main />
      <Footer />
    </GlobalContextProvider>
  );
}

export default App;
