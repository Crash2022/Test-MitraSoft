// import './App.css';
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {routes} from '../shared/api/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RoutePaths} from '../shared/api/paths';
import {Navigate, Route, Routes} from 'react-router-dom';
import {About} from '../pages/About/About';
import {Posts} from '../pages/Posts/Posts';
import {User} from '../pages/User/User';
import {Error404} from '../shared/error404/Error404';
import Container from 'react-bootstrap/Container';
// import {PostItem} from "../pages/PostItem/PostItem";

export const App = () => {

    return (
        <div className="App">
        {/*<Container>*/}
            <RouterProvider router={routes}/>
            {/*<Routes>*/}
            {/*    <Route path={RoutePaths.HOME} element={<Posts/>}/>*/}
            {/*    /!*<Route path={RoutePaths.POST} element={<PostItem/>}/>*!/*/}
            {/*    <Route path={RoutePaths.USER} element={<User/>}/>*/}
            {/*    <Route path={RoutePaths.ABOUT} element={<About/>}/>*/}
            {/*    <Route path={RoutePaths.ERROR404} element={<Error404 />} />*/}
            {/*    <Route path={'*'} element={<Navigate to={RoutePaths.ERROR404} />} />*/}
            {/*</Routes>*/}
            </div>
        // </Container>
    )
}
