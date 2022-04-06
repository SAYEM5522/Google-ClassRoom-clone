import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "../Server/DB.js";
const app=express();
const port=process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
// API for Create Class
app.post("/CreateClass",(req,res)=>{
  const {ClassName,Section,Subject,Room}=req.body;
  connection.query(`INSERT INTO CreateClass(ClassName,Section,Subject,Room)
   VALUES('${ClassName}','${Section}','${Subject}','${Room}')`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// API for get CreateClass
app.get("/CreateClass",(req,res)=>{
  connection.query(`SELECT * FROM CreateClass`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

app.listen(port,()=>{
  console.log("server started at port 5000");
})