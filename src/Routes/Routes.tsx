import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Live } from "../pages/MyAccount/Live";
import { Platforms } from "../pages/MyAccount/Platforms";
import { Singin } from "../pages/Singin";
import { Singup } from "../pages/Singup";

import { AuthRoute } from "./AuthRoute";

export function RouterConfig() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/singup" element={<Singup />} />
            <Route path="/singin" element={<Singin />} />

            <Route path="/myaccount/platforms" element={
                <AuthRoute>
                    <Platforms />
                </AuthRoute>
            } />

            <Route path="/myaccount/live" element={
                <AuthRoute>
                    <Live />
                </AuthRoute>
            } />
        </Routes>
    )
}