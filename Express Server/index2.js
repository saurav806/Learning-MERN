import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res)=>{
    res.send("This is home page");
})

app.get("/about", (req,res) => {
    res.send("<h1>About</h1> I'm Saurav Singh");
})

// app.post("/contact", (req, res)=>{
//     res.send("this is contact");
// })

app.listen(port, ()=>{
    console.log(`Server has started at ${port}`);
})