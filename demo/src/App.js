import './App.css';
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import NavBar from './Components/Navbar';
import Header from './Components/Header';
import About from './Pages/About';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
