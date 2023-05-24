import {RoutePaths} from "./paths";
import {createBrowserRouter} from 'react-router-dom'
import {NavbarWrapper} from '../../components/NavbarWrapper/NavbarWrapper'
import {Posts} from '../../pages/Posts/Posts'

export const routes = createBrowserRouter([
    {
        path: RoutePaths.HOME,
        element: <NavbarWrapper>
            <Posts/>
        </NavbarWrapper>
    }
])