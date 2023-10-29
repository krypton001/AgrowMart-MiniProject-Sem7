import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Home /><Footer/></>} />
        <Route path="/signup" element={<div className='h-screen'><Navbar/><Signup /></div>} />
        <Route path="/login" element={<div className='h-screen'><Navbar/><Login /></div>} />
        <Route path="/category/:category" element={<><Navbar/><CategoryPage/><Footer/></>} />
        <Route path="/category/:category/:id" element={<><Navbar/><ProductPage/><Footer/></>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
