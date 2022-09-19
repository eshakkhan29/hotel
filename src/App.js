import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import RoomsAndSuites from './Pages/RoomsAndSuites';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Rooms' element={<RoomsAndSuites/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
