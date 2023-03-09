import React from "react";
import "./UserWrapper.css";

import AddUser from "../addUser/AddUser";
import LoginUser from "../loginUser/LoginUser";

const UserWrapper = () => {
    return (
    <div className="user-wrapper">
        <AddUser/>
        <LoginUser/>
    </div>
    )
};

export default UserWrapper;