import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { Singin } from "../pages/Singin";
import { Singup } from "../pages/Singup";

import { AuthRoute } from "./AuthRoute";

export function RouterConfig() {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/singup" element={<Singup />} />
            <Route path="/singin" element={<Singin />} />

              <Route path="/myaccount" element={
                <AuthRoute>
                    <MyAccount/>
                </AuthRoute>
            } />
        </Routes>
    )
}