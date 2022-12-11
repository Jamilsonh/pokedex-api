import './App.css';
import { Home } from './pages/Home';
import { Route, Routes } from "react-router-dom"
import { Details } from './components/Details';
import Stats from './components/Stats';


function App() {
  return ( 
    <>
      <Routes>
        <Route path='/' element={<Home /> } />
          <Route path="/" element={<Home />} />
          <Route path="poke/:id" element={<Details />} />
          <Route path="stats" element={<Stats />} />
      </Routes>
    </>
  );
}

export default App;
