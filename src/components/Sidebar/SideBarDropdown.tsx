import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Collapse, Nav} from "react-bootstrap";

type SideBarDropdownProps = {
    title: string
    children: any
}

export const SideBarDropdown = ({title, children}: SideBarDropdownProps) => {

    const [open, setOpen] = useState(false)

    return (
        <Container fluid className={'p-0 m-0'}>
            <Nav.Item onClick={() => setOpen(!open)} className={'p-0 m-0'}>
                {/*Your Dropdown Text*/}
            </Nav.Item>
            <Collapse in={open}>
                <div> {children} </div>
            </Collapse>
        </Container>
    )
}