const express=require('express');
const app=express();

const cors=require('cors');
app.use(cors());

const bp=require('body-parser');
app.use(bp.urlencoded({extended:true}));
app.use(bp.json());


const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Landing_Page_Data");

const {Model}=require("./DB/DB1.js");

const path=__dirname;

app.get("/",(req,res)=>{
    
   
    // Model.insertMany({
    //     "Full_Name":"sugam",
    //     "User_Name":"sugam123",
    //     "Email":"abc@gmail.com",
    //     "Password":"123abc",
    //     "Number":1234567890
    // })
    // .then((x)=>{console.log("insertion was succcess"),res.send("insertion success")})
    // .catch((err)=>{console.log(err),res.send("insertion Failed!..")});

});

app.post("/register",(req,res)=>{
    
    const data=req.body

    Model.insertMany({
        "Full_Name":data.F_name,
        "User_Name":data.U_name,
        "Email":data.Mail,
        "Password":data.pass,
        "Number":data.P_num
    })
    .then((x)=>{console.log("insertion was succcess"),res.json({"Status":true})})
    .catch((err)=>{console.log(err),res.send("insertion Failed!..")})
    
})

app.post("/login",(req,res)=>{
    
    const data=req.body;
    
    let tmp1=0;
    let tmp2=0;

    Model.findOne({User_Name:data.Name,Password:data.pass})
    .then((res_data)=>{
        tmp1=res_data.User_Name;
        tmp2=res_data.Password;
        // console.log(res_data,tmp1,tmp2);
        if((tmp1===data.Name)&&(tmp2===data.pass))
            res.json({"status":"OK"});
        else
            res.json({"status":"NOK"})
    })
    .catch((err)=>{console.log(err),console.log({"valid":"NotOk"})})

    

})

app.listen(8000,()=>{
    console.log("server is listening ...")
});