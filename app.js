const express=require('express');
const app=express();
const path=require('path')

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));



app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/views/login",(req,res)=>{
    res.render("login")
});

app.get("/views/register",(req,res)=>{
    res.render("register")
});

app.get("/views/admin-login",(req,res)=>{
    res.render("admin-login")
});

app.get("/views/apply",(req,res)=>{
    res.render("apply")
});

app.get("/views/track",(req,res)=>{
    res.render("track");
});
app.get("/views/downlod",(req,res)=>{
    res.render("downlod");
});



app.listen(3000);