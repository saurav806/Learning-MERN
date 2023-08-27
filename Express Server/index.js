import express from "express";

const app = express();
const port = 3000;

app.get("/", (req,res)=>{
    console.log(req.rawHeaders);
})

app.listen(port, () =>{
    console.log(`Server has started at ${port}`);
})