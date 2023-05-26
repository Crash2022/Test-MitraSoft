import React from 'react';
import {Navbar, Container} from "react-bootstrap";
import Sidebar from "react-bootstrap-sidebar-menu";

export const SidebarMenuComponent = () => {

    const theme = "dark"

    return (
        <>
            <Navbar className="main-header" expand="lg" bg={theme} variant={theme}>
                <Container fluid>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>

            <Sidebar variant={theme} bg={theme} expand="sm">
                <Sidebar.Collapse getScrollValue={500}>

                    <Sidebar.Header>
                        <Sidebar.Brand>Logo</Sidebar.Brand>
                        <Sidebar.Toggle/>
                    </Sidebar.Header>

                    <Sidebar.Body>
                        <Sidebar.Nav>
                            <Sidebar.Nav.Link eventKey="menu_title">
                                <Sidebar.Nav.Icon>1</Sidebar.Nav.Icon>
                                <Sidebar.Nav.Title>Menu Title</Sidebar.Nav.Title>
                            </Sidebar.Nav.Link>
                        </Sidebar.Nav>
                    </Sidebar.Body>

                </Sidebar.Collapse>
            </Sidebar>
        </>
    )
}