import './App.css';
import { Routes, BrowserRouter, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import NavBar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>

          {/* <Route path="/" element={<}/> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
