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
                                src="../../public/images/logo2.png"
                                width="130"
                                height="80"

                                className={styles.logo}
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
                                    <Nav.Link as={NavLink} to="/" style={{
                                        color: "#FF69B4",
                                        fontWeight: "700",
                                        fontSize: "17px",
                                        cursor: "pointer",
                                    }}>HOME</Nav.Link>
                                    <Nav.Link as={NavLink} to="/About" style={{
                                        color: "#FF69B4",
                                        
                                        fontSize: "17px",
                                        cursor: "pointer",
                                    }}>ABOUT ME</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Graphic" style={{
                                        color: "#FF69B4",
                                       
                                        fontSize: "17px",
                                        cursor: "pointer",
                                    }}>GRAPHIC</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Model" style={{
                                        color: "#FF69B4",
                                        
                                        fontSize: "17px",
                                        cursor: "pointer",
                                    }}>3D MODEL</Nav.Link>
                                    <Nav.Link as={NavLink} to="/Photo" style={{
                                        color: "#FF69B4",
                                        
                                        fontSize: "17px",
                                        cursor: "pointer",
                                    }}>PHOTOGRAPH</Nav.Link>


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