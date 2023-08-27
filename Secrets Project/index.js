import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var password;

app.use(bodyParser.urlencoded({extended: true}));

function secretProject(req,res,next){
    console.log(req.body);
    password = req.body["password"];
    next();
}

app.use(secretProject);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
    
})

app.post("/check",(req,res)=>{
    if(password == "secret"){
        res.sendFile(__dirname + "/public/secret.html");
    }
    else
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(port,()=>{
    console.log(`Server has started at ${port}`);
})
