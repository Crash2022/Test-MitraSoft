import React from 'react';
import { Nav } from 'react-bootstrap';
import Container from "react-bootstrap/Container";

type SideBarItemProps = {
    title: string
    value: any
    onClick?: () => void
}

export const SideBarItem = ({title, value, onClick}: SideBarItemProps) => {

    return (
        <Container fluid className={'p-0 m-0'}>
            <Nav.Item onClick={onClick} className={'p-0 m-0'}>
                {/*Your Dropdown Text*/}
            </Nav.Item>
        </Container>
    )
}