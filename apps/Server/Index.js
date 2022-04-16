import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import connection from "../Server/DB.js";
import {OAuth2Client} from "google-auth-library"
const client__id="158609113954-ohvnc6ousgfb6tjfs4ju5v7e9vpbunbg.apps.googleusercontent.com"
const app=express();
const port=process.env.PORT || 5000;
const client = new OAuth2Client(client__id);
app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello World");
})
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
// API for  SignIn
app.post('/signin',(req, res) => {
  const {email,name,googleId,imageUrl} = req.body;
  connection.query(`INSERT INTO user(email,name,googleId,imageUrl)
  VALUES('${email}','${name}','${googleId}','${imageUrl}')`,(err,result)=>{
   if(err) throw err;
   res.status(201).send(result);
 })
   res.send({email,name,googleId,imageUrl});
});
// API for get SignIn
app.get('/signin',(req, res) => {
  const id=req.query.id;
  connection.query(`SELECT * FROM user WHERE googleId=${id}`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
  })
// API for Create ClassCode
app.post("/CreateClassCode",(req,res)=>{
  const {classCode}=req.body;
  connection.query(`INSERT INTO Classcode(classcode)
   VALUES('${classCode}')`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//  API for get ClassCode
app.get("/CreateClassCode",(req,res)=>{
  connection.query(`SELECT * FROM Classcode`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// API for Post comments
app.post("/Comments",(req,res)=>{
  const {comments,name,times,imgUrl,id}=req.body;
  connection.query(`INSERT INTO comments(comments,name,times,imgUrl,id)
   VALUES('${comments}','${name}','${times}','${imgUrl}','${id}')`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// API for get comments
app.get("/Comments",(req,res)=>{
  connection.query(`SELECT * FROM comments`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
// API for Post Annoncement
app.post("/Annoncement",(req,res)=>{
  const {announcement,name,times,imgUrl}=req.body;
  connection.query(`INSERT INTO announce(announcement,name,times,imgUrl)
  VALUES('${announcement}','${name}','${times}','${imgUrl}')`,(err,result)=>{
   if(err) throw err;
   res.send(result);
 })
  
})
// API for get Annoncement
app.get("/Annoncement",(req,res)=>{
  connection.query(`SELECT * FROM announce`,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})


// Server Start
app.listen(port,()=>{
  console.log("server started at port 5000");
})