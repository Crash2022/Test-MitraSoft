import React from 'react';
import {RoutePaths} from '../../shared/api/paths';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import MyAvatar from '../../shared/assets/my-avatar100.jpg'
import {useNavigate} from "react-router-dom";

export const NavbarComponent = () => {

    const navigate = useNavigate()

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{width: '100%'}}>
            <Container>
                <Navbar.Brand onClick={() => {navigate(RoutePaths.HOME)}} style={{cursor: 'pointer'}}>
                    МитраСОФТ
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Меню" id="collasible-nav-dropdown" style={{width: '350px'}}>
                            <NavDropdown.Item href={RoutePaths.HOME}>Список постов</NavDropdown.Item>
                            {/*<NavDropdown.Item href={RoutePaths.ABOUT}>Обо мне</NavDropdown.Item>*/}
                            <NavDropdown.Item href={RoutePaths.ABOUT}>
                                <div style={{border: '1px solid gray', padding: '5px', borderRadius: '5px',
                                    display: 'flex', alignItems: 'center', gap: '10px'}}
                                >
                                    <div>
                                        <img src={MyAvatar} alt='my-avatar'
                                             width={70} height={70}
                                             style={{borderRadius: '50%'}}
                                        />
                                    </div>
                                    <div>
                                        <Card.Title>Чашин Александр</Card.Title>
                                        <Card.Text>ManForCoding@gmail.com</Card.Text>
                                    </div>
                                </div>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}