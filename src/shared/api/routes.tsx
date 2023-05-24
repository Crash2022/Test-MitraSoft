import {RoutePaths} from "./paths";
import {createBrowserRouter} from 'react-router-dom'
import {NavbarWrapperProvider} from '../../components/NavbarWrapperProvider/NavbarWrapperProvider'
import {Posts} from '../../pages/Posts/Posts'
import {User} from "../../pages/User/User";
import {About} from "../../pages/About/About";

export const routes = createBrowserRouter([
    {
        path: RoutePaths.HOME,
        element: <NavbarWrapperProvider>
            <Posts/>
        </NavbarWrapperProvider>
    },
    {
        path: RoutePaths.HOME,
        element: <NavbarWrapperProvider>
            <User/>
        </NavbarWrapperProvider>
    },
    {
        path: RoutePaths.HOME,
        element: <NavbarWrapperProvider>
            <About/>
        </NavbarWrapperProvider>
    }
])