import logo from "./logo.svg";
import "./App.css";
import Avaliador from "./Avaliador";

function App() {
  return (
    <div>
      <h3>Componente Basico</h3>
      <div className="container">
        <p>
          <Avaliador quantidade={5} avaliacao={5} titulo="Homem Aranha" />
        </p>
        <p>
          <Avaliador quantidade={5} avaliacao={5} titulo="Barbie" />
        </p>
        <p>
          <Avaliador quantidade={5} avaliacao={5} titulo="Batman" />
        </p>
      </div>
    </div>
  );
}

export default App;
