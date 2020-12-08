import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Presentamos from "./components/Presentamos"
import Colaboran from "./components/Colaboran"

function App() {
  return (
    <div>
      <Header />
      <Presentamos/>
      <Colaboran />
    </div>
  );
}




export default App;
