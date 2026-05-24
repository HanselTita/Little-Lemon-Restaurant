import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Reservations from './pages/Reservations'
import Order from './pages/Order'
import Login from './pages/Login'
import ReservationConfirmed from './pages/ReservationConfirmed'
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
      <Nav/>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/menu" element={<Menu />} />
           <Route path="/reservations" element={<Reservations />}/>
           <Route path="/order" element={<Order />} />
           <Route path="/login" element={<Login />} />
           <Route path="/reservation-confirmed" element={<ReservationConfirmed />}/>
        </Routes>
      <Footer/>
    </>
  );
}

export default App;
