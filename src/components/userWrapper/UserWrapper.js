import React from "react";
import "./UserWrapper.css";

import AddUser from "../addUser/AddUser";
import LoginUser from "../loginUser/LoginUser";

const UserWrapper = ({user, setUser}) => {
    return (
    <div className="user-wrapper">
        <AddUser user={user} setUser={setUser} />
        <LoginUser/>
    </div>
    )
};

export default UserWrapper;