import { Route, Routes } from 'react-router-dom';
import './App.css';
import RoomDescription from './Components/RoomDetails/RoomDescription';
import Foods from './Components/Services/Foods/Foods';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import Room from './Pages/Room';
import RoomsAndSuites from './Pages/RoomsAndSuites';
import ServicePage from './Pages/ServicePage';
import ServicesPage from './Pages/ServicesPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/Rooms' element={<RoomsAndSuites />}></Route>
        <Route path='/Room' element={<Room />}>
          <Route path=':path' element={<RoomDescription />}></Route>
          <Route path='' element={<RoomDescription />}></Route>
        </Route>
        <Route path='/Services' element={<ServicesPage />}></Route>
        <Route path='/Services/Restaurant' element={<ServicePage />}>
          <Route path=':food' element={<Foods />}></Route>
          <Route path='' element={<Foods />}></Route>
        </Route>
        <Route path='About-us' element={<AboutUs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
