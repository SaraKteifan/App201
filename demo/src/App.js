import './App.css';
import { Routes, BrowserRouter, Route, HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import NavBar from './Components/Navbar';
import Footer from './Components/Footer';

import Home from './Pages/Home';
import Services from './Pages/Services'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Designs from './Pages/Designs';
import JobForm from './Components/JobForm';
import Applicants from './Components/Applicants';


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
          <Route path="/Designs" element={<Designs/>}/>
          <Route path="/job" element={<JobForm/>}/>
          <Route path="/appppo" element={<Applicants/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
