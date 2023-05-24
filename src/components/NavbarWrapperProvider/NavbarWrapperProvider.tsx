import React, {ReactElement} from 'react';
import {NavbarComponent} from "../NavbarComponent/NavbarComponent";

type NavbarWrapperProviderProps = {
    children: ReactElement
}

export const NavbarWrapperProvider: React.FC<NavbarWrapperProviderProps> = ({children}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <NavbarComponent/>
            <div style={{marginTop: '30px'}}>{children}</div>
        </div>
    )
}