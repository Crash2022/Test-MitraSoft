import React from 'react';
import {RouterProvider} from 'react-router-dom';
import {routes} from '../shared/api/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {

    return (
        <div className="App">
            <RouterProvider router={routes}/>
        </div>
    )
}
