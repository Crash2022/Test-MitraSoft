import {RoutePaths} from "./paths";
import {createBrowserRouter} from 'react-router-dom'
import {NavbarWrapperProvider} from '../../components/NavbarWrapperProvider/NavbarWrapperProvider'
import {Posts} from '../../pages/Posts/Posts'
import {User} from "../../pages/User/User";
import {About} from "../../pages/About/About";
import {Comments} from "../../pages/Comments/Comments";

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
        path: RoutePaths.COMMENTS,
        element: <NavbarWrapperProvider>
            <Comments/>
        </NavbarWrapperProvider>
    }
])