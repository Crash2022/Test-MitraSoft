import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import {RoutePaths} from "../../shared/api/paths";

export const Navbar = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Menu
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href={RoutePaths.HOME}>Posts</Dropdown.Item>
                <Dropdown.Item href={RoutePaths.ABOUT}>About Me</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}