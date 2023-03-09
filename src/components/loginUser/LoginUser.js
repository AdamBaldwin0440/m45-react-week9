import React, { useState } from "react";
import "./LoginUser.css";

const LoginUser = ({user, setUser}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] =useState();


    const onLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(username, password);
    };

    return (
        <div className="loginUser-wrapper"> 
        <form className="login-user-form" onSubmit={onLoginSubmit}>
            <label>
                Username:
                <input placeholder="username"
                onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password:
                <input placeholder="password"
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
    )
};
    export default LoginUser