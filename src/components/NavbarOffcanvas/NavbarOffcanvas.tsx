import React from 'react';
import MyAvatar from "../../shared/assets/my-avatar100.jpg";
import {RoutePaths} from "../../shared/api/paths";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Card from "react-bootstrap/Card";

export const NavbarOffcanvas = () => {

    return (
        <Navbar key={'0'} bg="light" expand={'0'} className="mb-3" style={{width: '100%'}}>
            <Container fluid>
                <Navbar.Brand href={RoutePaths.HOME}>МитраСофт</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${'0'}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${'1'}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${'0'}`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${'0'}`}>
                            МитраСофт
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href={RoutePaths.HOME}>Список постов</Nav.Link>
                            <Nav.Link href={RoutePaths.ABOUT}>Обо мне</Nav.Link>
                        </Nav>
                        <div>
                            <div style={{
                                border: '1px solid gray', padding: '5px', borderRadius: '5px',
                                display: 'flex', alignItems: 'center', gap: '10px'
                            }}
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
                        </div>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}