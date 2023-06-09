import {RoutePaths} from "./paths";
import {createBrowserRouter} from 'react-router-dom'
import {NavbarWrapperProvider} from '../../components/NavbarWrapperProvider/NavbarWrapperProvider'
import {Posts} from '../../pages/Posts/Posts'
import {User} from "../../pages/User/User";
import {About} from "../../pages/About/About";
import {Error404} from "../error404/Error404";

export const routes = createBrowserRouter([
    {
        path: RoutePaths.HOME,
        element: <NavbarWrapperProvider>
            <Posts/>
        </NavbarWrapperProvider>
    },
    {
        path: RoutePaths.USER,
        element: <NavbarWrapperProvider>
            <User/>
        </NavbarWrapperProvider>
    },
    {
        path: RoutePaths.ABOUT,
        element: <NavbarWrapperProvider>
            <About/>
        </NavbarWrapperProvider>
    },
    {
        path: '*',
        element: <Error404/>
    }
])