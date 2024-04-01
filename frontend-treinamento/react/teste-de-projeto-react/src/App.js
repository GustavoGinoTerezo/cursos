import logo from './logo.svg';
import './App.css';
import MyButton from './components/button/button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
        <br/>
        <button>Testando botão</button>
        
      </header>
      <div><MyButton/></div>
    </div>
   
  );
}

export default App;
