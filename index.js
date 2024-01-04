const express=require("express")
const path=require("path")
const app=express()
const port=3000


app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/normal/index.html"))
})
app.get("/binary",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/binary/index.html"))
})
app.get("/hexa",(req,res)=>{
    res.sendFile(path.join(__dirname,"public/hexa/index.html"))
})
app.listen(port,()=>{
    console.log("server is running...")
})