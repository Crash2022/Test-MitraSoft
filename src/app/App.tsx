import './App.css';
import React from 'react';
import {RoutePaths} from "../shared/api/paths";
import {Navigate, Route, Routes} from "react-router-dom";
import {About} from "../pages/About/About";
import {Posts} from "../pages/Posts/Posts";
import {Error404} from "../shared/error404/Error404";
import {Post} from "../pages/Post/Post";

export const App = () => {

    return (
        <div className="App">
            <Routes>
                <Route path={RoutePaths.HOME} element={<Posts/>}/>
                <Route path={RoutePaths.POST} element={<Post/>}/>
                <Route path={RoutePaths.ABOUT} element={<About/>}/>
                <Route path={RoutePaths.ERROR404} element={<Error404 />} />
                <Route path={'*'} element={<Navigate to={RoutePaths.ERROR404} />} />
            </Routes>
        </div>
    )
}
