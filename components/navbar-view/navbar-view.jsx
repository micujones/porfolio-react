import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from 'react-router';

import './navbar-view.css';
import { useState } from 'react';

export const NavbarView = () => {
    const [show, setShow] = useState(false);

    const handleShowOffcanvas = () => {
        show ? setShow(false) : setShow(true);
    };

    return (
        <Navbar
            expand="md"
            data-bs-theme="dark"
            className="bg-body-tertiary"
            sticky="top"
            key="md"
        >
            <Container fluid>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    onClick={handleShowOffcanvas}
                />
                <Navbar.Offcanvas
                    placement="end"
                    data-bs-theme="dark"
                    aria-labelledby="offcanvasNavbarLabel-expand-md"
                    show={show}
                    onHide={handleShowOffcanvas}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="me-auto navbar-menu">
                            <Nav.Link>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : ''
                                    }
                                    onClick={show && handleShowOffcanvas}
                                >
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/work"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : ''
                                    }
                                    onClick={show && handleShowOffcanvas}
                                >
                                    Work
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : ''
                                    }
                                    onClick={show && handleShowOffcanvas}
                                >
                                    Contact
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        isActive ? 'active' : ''
                                    }
                                    onClick={show && handleShowOffcanvas}
                                >
                                    About
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};
