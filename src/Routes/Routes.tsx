import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { InviteStudio } from "../pages/InviteStudio";
import { AllPlatforms } from "../pages/MyAccount/AllPlatforms";
import { Live } from "../pages/MyAccount/Live";
import { Platforms } from "../pages/MyAccount/Platforms";
import { NotFound } from "../pages/NotFound";
import { Settings } from "../pages/Settings";
import { Singin } from "../pages/Singin";
import { Singup } from "../pages/Singup";
import { Studio } from "../pages/Studio";

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

            <Route path="/myaccount/platforms/allplatforms" element={
                <AuthRoute>
                    <AllPlatforms />
                </AuthRoute>
            } />


            <Route path="/myaccount/live" element={
                <AuthRoute>
                    <Live />
                </AuthRoute>
            } />

            <Route path="/settings" element={
                <AuthRoute>
                    <Settings />
                </AuthRoute>
            } />


            <Route path="/studio" element={
                <AuthRoute>
                    <Studio />
                </AuthRoute>
            } />

            <Route path="/studio/:slug" element={<InviteStudio />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}


