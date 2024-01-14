import { useState, useEffect } from "react";
import TransparentButton from "../Buttons/TransparentButton";
import Logo from "./logo.png";
import { Navbar, Container, Nav } from 'react-bootstrap';
import classes from "./navbar.module.css";

export default function NavbarElement() {
  const [activeLink, setActiveLink] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // setCartItems(props?.user?.savedProducts?.length)
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsOpen(false); 
  };

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="lg" absolute="top" className={`${classes.navBar} justify-content-between`}>
      <Container className="justify-content-between">
        <Navbar.Brand className={`${classes.logo} col-2`}>
          <img src={Logo} className='col-sm-11 col-lg-7' alt="Cheesecake logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggle} aria-controls="basic-navbar-nav" className={`${classes.customToggle}`} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`${classes.navList}`}>
            <Nav.Link className={`${classes.navItem} ${activeLink === 'home' ? `${classes.active}` : ''}`}
              onClick={() => handleLinkClick('home')}>Home</Nav.Link>
            <Nav.Link className={`${classes.navItem} ${activeLink === 'about' ? `${classes.active}` : ''}`}
              onClick={() => handleLinkClick('about')}>About Us</Nav.Link>
            <Nav.Link className={`${classes.navItem} ${activeLink === 'menu' ? `${classes.active}` : ''}`}
              onClick={() => handleLinkClick('menu')}>Menu</Nav.Link>
            <Nav.Link className={`${classes.navItem} ${activeLink === 'contact' ? `${classes.active}` : ''}`}
              onClick={() => handleLinkClick('contact')}>Contact</Nav.Link>
          </Nav>
          <Nav className="navButton col-4 justify-content-end">
            <TransparentButton name={"Sign up"} darkButton={isMobile} />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
