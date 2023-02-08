import './App.css';
import Maison from './Composants/Maison';
import Person from './Composants/Person';
import Players from './Composants/Players';
import Voiture from './Composants/Voiture';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Voiture/>
        </li>
        <li>
          <Maison/>
        </li>
        <li>
          <Person/>
        </li>
        <li>
          <Players/>
        </li>
      </ul>
      
    </div>
  );
}

export default App;
