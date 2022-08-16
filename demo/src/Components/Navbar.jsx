import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Navbar.css'
import {useState, useEffect} from 'react'
import './CSS/Navbar.css';
import AnimatedBg from "react-animated-bg";
import TopButton from './TopButton';

function NavBar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1400);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className='top-plane'>
      
        <Navbar bg="black" expand='xxl' className="mb-3" id='navbar'>
          <Container>
          <Navbar.Brand href="#">
                <img src='./Images/logoo.png' alt='App201 Logo' id='nav-logo'></img>
        <Navbar bg="white" expand='xxl' className="mb-0">
          <Container>
          <Navbar.Brand href="/home">
                <img src='./Images/App201-logo.jpg' alt='App201 Logo' id='nav-logo'></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} className='bg-white text-black' />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xxl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
              placement="start"
            
            >
                
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
                  App201
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className={isDesktop?'text-white':'text-black'}>الرئيسية</Nav.Link>
                  <Nav.Link href="#action2" className={isDesktop?'text-white':'text-black'}>خدماتنا</Nav.Link>
                  <Nav.Link href="/About" className={isDesktop?'text-white':'text-black'}>من نحن</Nav.Link>
                  <Nav.Link href="#action4" className={isDesktop?'text-white':'text-black'}>تواصل معنا</Nav.Link>
                  <Nav.Link href="/home"> <h4 style={{}}>الرئيسية</h4></Nav.Link>
                  <Nav.Link href="#cons"><h4>خدماتنا </h4></Nav.Link>
                  <Nav.Link href="#action3"><h4>من نحن </h4></Nav.Link>
                  <Nav.Link href="#action4"><h4>تواصل معنا </h4></Nav.Link>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-xxl`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <TopButton />
    </div>
  );
}

export default NavBar;
