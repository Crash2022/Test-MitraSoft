import React from 'react';
import SideBar from "../Sidebar/SideBar";

export const NavbarComponentWithSidebar = () => {

    return (
        <SideBar>
            <SideBar.Dropdown title={'Datasets'}>
                <SideBar.Item title={'Files'} value={'some_files'} />
                <SideBar.Item title={'Documents'} value={'something_else'} />
            </SideBar.Dropdown>
            <SideBar.Dropdown title={'Title1'}>
                <SideBar.Item title={'Creator'} value={'some_writer'} />
                <SideBar.Item title={'Components List'} value={'some_list'} />
            </SideBar.Dropdown>
        </SideBar>
    )
}