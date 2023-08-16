import './App.css';
import Contador from './Components/Contador/Contador.js';

function App() {
  return (
    <div className="App">
      <Contador valorInicial={0}>
        Contador
      </Contador>
    </div>
  );
}

export default App;
