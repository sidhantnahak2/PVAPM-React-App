import React from "react";
import AuthGuard from "./guards/AuthGuard";
import Login from "./components/Login";

const AuthModule=()=>{
    return(
        <div>
            <AuthGuard>
                <Login/>
            </AuthGuard>

        </div>
    )
}

export default AuthModule;