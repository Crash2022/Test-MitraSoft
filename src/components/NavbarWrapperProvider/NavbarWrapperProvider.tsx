import React, {ReactElement} from 'react';
import {NavbarComponent} from "../NavbarComponent/NavbarComponent";

type NavbarWrapperProviderProps = {
    children: ReactElement
}

export const NavbarWrapperProvider: React.FC<NavbarWrapperProviderProps> = ({children}) => {
    return (
        <>
            <NavbarComponent/>
            <div>{children}</div>
        </>
    )
}