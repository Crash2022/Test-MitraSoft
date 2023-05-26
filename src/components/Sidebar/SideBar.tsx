import React from 'react';
import {Nav} from "react-bootstrap";
import {SideBarDropdown} from "./SideBarDropdown";
import {SideBarItem} from "./SideBarItem";

type SideBarProps = {
    children: any
}

const SideBar = ({children}: SideBarProps) => {
    return <Nav className={'flex-column'}>{children}</Nav>
}

SideBar.Dropdown = SideBarDropdown
SideBar.Item = SideBarItem

export default SideBar