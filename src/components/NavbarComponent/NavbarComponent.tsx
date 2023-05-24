import React from 'react';
import {RoutePaths} from "../../shared/api/paths";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import MyAvatar from '../../shared/assets/my-avatar300.jpg'

export const NavbarComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width: '100%'}}>
            <Container>
                <Navbar.Brand>МитраСОФТ</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Меню" id="collasible-nav-dropdown">
                            <NavDropdown.Item href={RoutePaths.HOME}>Посты</NavDropdown.Item>
                            <NavDropdown.Item href={RoutePaths.ABOUT}>Обо мне</NavDropdown.Item>

                            <Card style={{ width: '15rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" width={100} src={MyAvatar}/>
                                    <Card.Title>Чашин Александр</Card.Title>
                                    <Card.Text>
                                        ManForCoding@gmail.com
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}