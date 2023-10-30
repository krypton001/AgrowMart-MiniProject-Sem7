import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Sell from './pages/Sell';

function App() {

  const user1={
    name:"Sam Mehta",
    email:"sam@gmail.com",
    password:"123456",
    role:"farmer"
  };

  const user2={
    name:"John Don",
    email:"john@gmail.com",
    password:"123456",
    role:"shopper"
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar user={user2}/><Home /><Footer/></>} />
        <Route path="/signup" element={<div className='h-screen'><Navbar user={user2}/><Signup /></div>} />
        <Route path="/login" element={<div className='h-screen'><Navbar user={user2}/><Login /></div>} />
        <Route path="/category/:category" element={<><Navbar user={user2}/><CategoryPage/><Footer/></>} />
        <Route path="/category/:category/:id" element={<><Navbar user={user2}/><ProductPage/><Footer/></>} />
        <Route path="/sell" element={<div className='h-screen'><Navbar user={user2}/><Sell /></div>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
