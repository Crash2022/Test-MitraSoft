import React, {ReactElement} from 'react';
import {NavbarOffcanvas} from "../NavbarOffcanvas/NavbarOffcanvas";

type NavbarWrapperProviderProps = {
    children: ReactElement
}

export const NavbarWrapperProvider: React.FC<NavbarWrapperProviderProps> = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <NavbarOffcanvas/>
            <div>{children}</div>
        </div>
    )
}