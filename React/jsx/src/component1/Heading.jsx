import React from "react";

function Heading() {
    const date = new Date();
    const currentTime = date.getHours();
    let greet;

    const customStyle = {
    color: ""
    }

    if(currentTime < 12){
        greet = "Good Morning"
        customStyle.color = "red";
    } else if(currentTime < 18){
        greet = "Good Afternoon"
        customStyle.color = "green";
    }else {
        greet = "Good Night"
        customStyle.color = "blue";
    }
    return (
        <div>
            <h1 className='heading' style={customStyle}>{greet}</h1>
        </div>
    );
}

// function Heading() {
//     return <h1>My Favourite Foods</h1>;
// }

export default Heading;