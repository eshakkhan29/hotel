import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Room from './Pages/Room';
import RoomsAndSuites from './Pages/RoomsAndSuites';
import Services from './Pages/Services';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Rooms' element={<RoomsAndSuites/>}></Route>
        <Route path='/Room' element={<Room/>}></Route>
        <Route path='/Services' element={<Services/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
