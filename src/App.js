import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Presentamos from "./components/Presentamos"
import ComoFunctiona from "./components/ComoFunctiona";
import Header from "./components/Header";
import Colaboran from "./components/Colaboran";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <Presentamos />
      <ComoFunctiona />
      <Colaboran />
      <Footer />
    </div>
  );
}

export default App;
