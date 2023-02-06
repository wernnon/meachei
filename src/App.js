import home from './home.png';
import logo from './logo.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='outer'>
          <img src={home} className="App-logo" alt="logo" />
        </div>
        <a>
          <img src={logo} className='publisher'/>
        </a>
      </header>
    </div>
  );
}

export default App;
