import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './Headerstyle.module.css';
import { NavLink } from 'react-router-dom';


function Header() {



    return (
        <>
            {['sm',].map((expand) => (
                <Navbar className={styles.navbarCustom} key={expand} variant="light" expand={expand} >
                    <Container fluid style={{ justifyContent: 'end' }}>
                        <Navbar.Brand href="#home">
                            <img
                                src="../../public/images/logo.png"
                                width="150"
                                height="150"
                                
                                className=""
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    MENU☆
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>

                                <Nav className={styles.navlink}>
                                    <Nav.Link as={NavLink} to="/">HOME</Nav.Link>
                                    <Nav.Link as={NavLink} to="/About" >ABOUT ME</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Graphic" >GRAPHIC</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Model" >3D MODEL</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Photo" >PHOTOGRAPH</Nav.Link>


                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar >
            ))
            }
        </>
    );
}

export default Header;