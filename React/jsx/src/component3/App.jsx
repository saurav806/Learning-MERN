import React from "react";
import Login from "./Loggin.jsx";
import "./App.css";

var isLoggedIn = false;

function App () {
    return (
        <div>{
            isLoggedIn ? <h1 className="header">Hello</h1> : <Login />
        }</div>
    )
}

export default App;