import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './CSS/Navbar.css'
import {useState, useEffect} from 'react'
import './CSS/Navbar.css';
import TopButton from './TopButton';
import WhatsappButton from './WhatsappButton';
import { useLocation } from 'react-router-dom';
import LocationButton from './LocationButton';

function NavBar() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1400);
  const [navId,setNavId]=useState('navbar');
  const [navbarLogo, setNavbarLogo]= useState('white-logo.webp')
  const [dis,setDis]=useState('none');
  const [scrolling, setScrolling] = useState(false);

  const location=useLocation();
  const mainClass= isDesktop && !scrolling? (location.pathname === '/' ? 'text-white active':'text-white'):(location.pathname === '/' ?'text-black active':'text-black');
  const servicesClass=  isDesktop && !scrolling? (location.pathname === '/Services' ? 'text-white active':'text-white'):(location.pathname === '/Services' ? 'text-black active':'text-black');
  const aboutClass= isDesktop && !scrolling? (location.pathname === '/About' ? 'text-white active':'text-white'):(location.pathname === '/About' ? 'text-black active':'text-black');
  const contactClass= isDesktop && !scrolling? (location.pathname === '/Contact' ? 'btn border-white text-white active':'btn border-white text-white'):(location.pathname === '/Contact' ? 'btn border-dark text-black active':'btn border-dark text-black');
  const navbarClass= scrolling ? "mb-3 navbar-white":"mb-3 navbar-dark";
  // const navbarid= scrolling ? "mb-3 navbar-white":"mb-3 navbar-dark";
  // const default
  console.log(mainClass);


    // When the user scrolls down 20px from the top of the document, change navbar
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            setDis('block');
            setNavId("navbarScroll");
            setScrolling(true);
            setNavbarLogo('App201-logo-.webp');
        } else {
            setDis('none');
            setNavId("navbar");
            setScrolling(false);
            setNavbarLogo('white-logo.webp');
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
        <Navbar expand='xxl' className={navbarClass} id={navId}>
          {/* <Container> */}

          <Navbar.Brand href="/">
                <img src={`./Images/${navbarLogo}`} alt='App201 Logo' id='nav-logo'></img>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} className='mx-3' id='nav-toggle'/>

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


                  <Nav.Link href="/" className={mainClass}><h5>الصفحة الرئيسية</h5></Nav.Link>
                  <Nav.Link href="/Services" className={servicesClass}><h5>خدماتنا</h5></Nav.Link>
                  <Nav.Link href="/Designs" className={servicesClass}><h5>أعمالنا</h5></Nav.Link>
                  <Nav.Link href="/About" className={aboutClass}><h5>من نحن</h5></Nav.Link>
                  <Nav.Link href="/Contact"><h5 className={contactClass} style={{fontSize: '20px'}}>استشرنا لطفاً</h5></Nav.Link>


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
          {/* </Container> */}
        </Navbar>
        <TopButton dis={dis} />
        <WhatsappButton />
        <LocationButton />
    </>
  );
}

export default NavBar;
