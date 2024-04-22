import logo from "./logo.svg";
import "./App.css";
import Avaliador from "./Avaliador";

function App() {
  return (
    <div>
      <h3>Componente Basico</h3>
      <div className="container">
        <p>
          <Avaliador quantidade="5" avaliacao="3" /> Homem Aranha
        </p>
        <p>
          <Avaliador quantidade="5" avaliacao="2" /> Barbie
        </p>
        <p>
          <Avaliador quantidade="5" avaliacao="4" /> Batman
        </p>
      </div>
    </div>
  );
}

export default App;
