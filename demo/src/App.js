import './App.css';
import { Routes, BrowserRouter, Route, Link, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Services from './Pages/Services'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Designs from './Pages/Designs';


function App() {
  return (
    <>
      <BrowserRouter history={HashRouter}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Services" element={<Services />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/designs" element={<Designs/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
