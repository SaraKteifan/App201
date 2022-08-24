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
import WhatsappButton from './WhatsappButton';
import { Router, useLocation } from 'react-router-dom';

function NavBar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  const [navId,setNavId]=useState('navbar');
  const [navbarLogo, setNavbarLogo]= useState('white-logo.png')
  const [dis,setDis]=useState('none');

  const location=useLocation();
  const mainClass= location.pathname === '/' ? 'text-white active':'text-white';
  const servicesClass= location.pathname === '/Services' ? 'text-white active':'text-white';
  const aboutClass= location.pathname === '/About' ? 'text-white active':'text-white';
  const contactClass= location.pathname === '/Contact' ? 'text-black active':'text-black';
  console.log(mainClass);


    // When the user scrolls down 20px from the top of the document, change navbar
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setDis('block');
            setNavId("navbarScroll");
            setDesktop(false);
            setNavbarLogo('App201-logo-.png');
        } else {
            setDis('none');
            setNavId("navbar");
            setDesktop(true);
            setNavbarLogo('white-logo.png');
        }
    }
    
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1400);
    };
   
    useEffect(()=>{
        window.onscroll = function() {scrollFunction()};
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    },[navId])



  console.log(window.innerWidth,'path',useLocation().pathname);

  return (
    <>
        <Navbar expand='xxl' className="mb-3" id={navId}>
          <Container>

          <Navbar.Brand href="#/">
                <img src={`./Images/${navbarLogo}`} alt='App201 Logo' id='nav-logo'></img>
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


                  <Nav.Link href="/" className={isDesktop? mainClass:'text-black'}><h5>الصفحة الرئيسية</h5></Nav.Link>
                  <Nav.Link href="/Services" className={isDesktop? servicesClass:'text-black'}><h5>خدماتنا</h5></Nav.Link>
                  <Nav.Link href="/About" className={isDesktop? aboutClass:'text-black'}><h5>من نحن</h5></Nav.Link>
                  <Nav.Link href="/Contact" className={isDesktop? contactClass:'text-black'} id='nav-contactBTN'><h5 className='mb-5'>تواصل معنا</h5></Nav.Link>


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
        <TopButton dis={dis} />
        <WhatsappButton />
    </>
  );
}

export default NavBar;
