import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Singup } from "../pages/Singup";

import { RouteHandler } from "./RouteHandler";

export function RouterConfig() {

    return (
        <Routes>
            <Route path="/" element={
                <RouteHandler>
                    <Home />
                </RouteHandler>
            } />
            <Route path="/singup" element={
                <RouteHandler >
                    <Singup />
                </RouteHandler>
            } />
        </Routes>
    )
}