import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {RoutePaths} from "../../shared/api/paths";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>MitraSoft</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={RoutePaths.HOME}>Посты</NavDropdown.Item>
                            <NavDropdown.Item href={RoutePaths.ABOUT}>Обо мне</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <Dropdown>
        //     <Dropdown.Toggle variant="primary" id="dropdown-basic">
        //         Меню
        //     </Dropdown.Toggle>
        //
        //     <Dropdown.Menu>
        //         <Dropdown.Item>Чашин Александр</Dropdown.Item>
        //         <Dropdown.Item>ManForCoding@gmail.com</Dropdown.Item>
        //         <Dropdown.Item href={RoutePaths.HOME}>Посты</Dropdown.Item>
        //         <Dropdown.Item href={RoutePaths.ABOUT}>Обо мне</Dropdown.Item>
        //     </Dropdown.Menu>
        // </Dropdown>
    )
}