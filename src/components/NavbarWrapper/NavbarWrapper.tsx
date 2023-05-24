import React, {ReactElement} from 'react';
import {Navbar} from "../Navbar/Navbar";

type NavbarWrapperProps = {
    children: ReactElement
}

export const NavbarWrapper = ( {children}:NavbarWrapperProps ) => {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
        </>
    )
}