import React from "react";
import Input from "./components/input";

function Signup (props) {
    return (
        <div>
            <form action="" method="">
                <h1>SignUp</h1>
                <Input 
                type="text" 
                name="userName" 
                placeholder="Enter Your Email address" />

                <Input 
                type="password" 
                name="password" 
                placeholder="Enter Your password" />

                <Input 
                type="password" 
                name="password" 
                placeholder="Confirm Password" />
                

                <button>Login</button>
                <p>Already a customer?</p>
                <a href="www.google.com">Click Here to Login</a>
            </form>
        </div>
    );
}

export default Signup;