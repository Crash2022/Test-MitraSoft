import React, {ReactElement} from 'react';
import {Navbar} from "../Navbar/Navbar";

type NavbarWrapperProviderProps = {
    children: ReactElement
}

export const NavbarWrapperProvider: React.FC<NavbarWrapperProviderProps> = ({children}) => {
    return (
        <>
            <Navbar/>
            <div>{children}</div>
        </>
    )
}