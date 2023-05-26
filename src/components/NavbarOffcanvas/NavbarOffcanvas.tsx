import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {RoutePaths} from "../../shared/api/paths";
import MyAvatar from "../../shared/assets/my-avatar100.jpg";
import Card from "react-bootstrap/Card";

export const NavbarOffcanvas = () => {

    return (
        <>
            {
                [false].map((expand) => (
                    // @ts-ignore
                    <Navbar key={expand} bg="light" expand={expand} className="mb-3" style={{width: '100%'}}>
                        <Container fluid>
                            <Navbar.Brand href="#">МитраСофт</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}/>
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="start"
                            >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        МитраСофт
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-end flex-grow-1 pe-3">
                                        <Nav.Link href={RoutePaths.HOME}>Список постов</Nav.Link>
                                        <Nav.Link href={RoutePaths.ABOUT}>Обо мне</Nav.Link>
                                    </Nav>
                                    <div>
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
                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))
            }
        </>
    )
}