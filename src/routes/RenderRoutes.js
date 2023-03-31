import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const RenderRoutes = ({
    routes = [
        {
            path: "/",
            component: () => <Login />,
            title: ''
        },
    ],
}) => (
    <Fragment>
        {routes.map((route, routeIdx) => (
            <Routes key={routeIdx} >
                <Route path={route.path} element={<route.component />} />
            </Routes>
        ))}
    </Fragment>
);
export default RenderRoutes;