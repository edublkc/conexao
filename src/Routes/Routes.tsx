import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Outros } from "../pages/Outros";

import { RouteHandler } from "./RouteHandler";

export function RouterConfig() {

    return (
        <Routes>
            <Route path="/" element={
                <RouteHandler>
                    <Home />
                </RouteHandler>
            } />
            <Route path="/outros" element={
                <RouteHandler auth={false}>
                    <Outros />
                </RouteHandler>
            } />
        </Routes>
    )
}