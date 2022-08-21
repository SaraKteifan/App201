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
  },[]);

  console.log(window.innerWidth);

  return (
    <>
        <Navbar expand='xxl' className="mb-3" id='navbar'>
          <Container>
          <Navbar.Brand href="#/">
                <img src='./Images/logoo.png' alt='App201 Logo' id='nav-logo'></img>
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
                <Nav className="justify-content-end flex-grow-1 pe-3" lang='ar' id="nav_tabs">


                  <Nav.Link href="/" className={isDesktop?'text-white':'text-black'}><h5>الصفحة الرئيسية</h5></Nav.Link>
                  <Nav.Link href="/Services" className={isDesktop?'text-white':'text-black'}><h5>خدماتنا</h5></Nav.Link>
                  <Nav.Link href="/About" className={isDesktop?'text-white':'text-black'}><h5>من نحن</h5></Nav.Link>
                  <Nav.Link href="/Contact" className={isDesktop?'text-white':'text-black'}><button id='nav-contactBTN'><h5>تواصل معنا</h5></button></Nav.Link>


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
    </>
  );
}

export default NavBar;
