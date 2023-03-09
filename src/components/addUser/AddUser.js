import React from "react";
import "./AddUser.css";

const AddUser = () => {
    return(
    <div className="adduser-wrapper"> 
        <form className="add-user-form">
            <label>
                Username:
                <input placeholder="username"/>
            </label>
            <label>
                Email
                <input placeholder="email"/>
            </label>
            <label>
                Password:
                <input placeholder="password"/>
            </label>
            <button>Register</button>
        </form>
    </div>
    )
};

export default AddUser;