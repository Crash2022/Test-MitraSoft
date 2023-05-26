import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {routes} from '../shared/api/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

    return (
        <div className="App">
            <RouterProvider router={routes}/>
            {/*<Routes>*/}
            {/*    <Route path={RoutePaths.HOME} element={<Posts/>}/>*/}
            {/*    <Route path={RoutePaths.USER} element={<User/>}/>*/}
            {/*    <Route path={RoutePaths.ABOUT} element={<About/>}/>*/}
            {/*    <Route path={RoutePaths.ERROR404} element={<Error404 />} />*/}
            {/*    <Route path={'*'} element={<Navigate to={RoutePaths.ERROR404} />} />*/}
            {/*</Routes>*/}
        </div>
    )
}
