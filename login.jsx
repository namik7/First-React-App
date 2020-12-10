import React from "react";
import Input from "./components/input";

function Login(props) {
    return (
        <div className="login-background">
            <form action="" method="">
                <h1>Login</h1>
                <Input 
                type="text" 
                name="userName" 
                placeholder="Enter Your Email address" />

                <Input 
                type="password" 
                name="password" 
                placeholder="Enter Your password" />

                <button>Login</button>
                <p>Haven't registerd yet?</p>
                <a href="www.google.com">Click Here to Register</a>
            </form>
        </div>
    );
}

export default Login;