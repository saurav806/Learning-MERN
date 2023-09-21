import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//---------------------Lession 310--------------------------------------------
//Components practice
import Heading from './component1/Heading';


ReactDOM.render(
    <App />,
    document.getElementById('root')
);



//----------------------------------------------------------------------------
//---------------------Lession 309--------------------------------------------
// React Components - Heading components created 

// import Heading from './Heading';
// import List from './List';

// ReactDOM.render(
//   <div>
//     <App />
//   </div>,
//   document.getElementById('root')
// );




//----------------------------------------------------------------------------

//---------------------Lesson 308---------------------------------------------
//Change color using the time code using jsx and heading css

// const date = new Date();
// const currentTime = date.getHours();
// let greet;

// const customStyle = {
//   color: ""
// }

// if(currentTime < 12){
//   greet = "Good Morning"
//   customStyle.color = "red";
// } else if(currentTime < 18){
//   greet = "Good Afternoon"
//   customStyle.color = "green";
// }else {
//   greet = "Good Night"
//   customStyle.color = "blue";
// }


// ReactDOM.render(
//     <div>
//       <h1 className='heading' style={customStyle}>{greet}</h1>
//     </div>,
//     document.getElementById('root')
// );

//----------------------------------------------------------------------------
//---------------------Lesson 307---------------------------------------------

//Inline styling
// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "1px solid black"
// }

// customStyle.color = "blue";
// //Inline styling
// ReactDOM.render(
//   <div>
//      {/* Coloring here direct*/}
//     {/* <h1 style={{color : "red"}}>Hello world</h1> */}
//     <h1 style={customStyle}>Hello World</h1>
//   </div>,
//   document.getElementById("root")
// );


//------------------------------------------------------------------------------------
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
//   <h1>Hello world</h1>
// );


// reportWebVitals();
