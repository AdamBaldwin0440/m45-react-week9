import React from "react";
import "./LoginUser.css";

const LoginUser = () => {
    return (
        <div className="loginUser-wrapper"> 
        <form className="login-user-form">
            <label>
                Username:
                <input placeholder="username"/>
            </label>
            <label>
                Password:
                <input placeholder="password"/>
            </label>
            <button>Login</button>
        </form>
    </div>
    )
};
    export default LoginUser