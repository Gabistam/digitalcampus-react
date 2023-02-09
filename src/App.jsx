import './App.css';
import Maison from './Composants/Maison';
import Person from './Composants/Person';
import Players from './Composants/Players';
import Voiture from './Composants/Voiture';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Composants/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Composants/Home';

function App() {
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/person' element={<Person/>} />
      <Route path='/jeu' element={<Players/>} />
      <Route path='/voiture' element={<Voiture/>} />
      <Route path='/maison' element={<Maison/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
