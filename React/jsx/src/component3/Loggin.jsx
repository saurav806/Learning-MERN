import React from "react";
import Input from "./Inpuut";

function Login (){
    return (
        <form >
            <Input 
                type = "text"
                placeholder= "Username"
            />
            <Input 
                type = "password"
                placeholder= "Password"
            />
            <button className="btn" type="submit">Login</button>
        </form>
    );
}

export default Login;