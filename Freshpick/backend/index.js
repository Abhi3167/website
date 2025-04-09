
const User = require('./db/user')
const express=require("express")
//import express
require('./db/db')
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors(origins = '*'))
app.get('/Freshpick',(req,res)=>{
    res.send("Hello world")
})

app.get('/user',async(req,res)=>{
    
    const user= await User.find()
    console.log(user ,"this is user data")
    res.send(user)
}
)

app.post('/signup',async(req,res)=>{
    
   let {name,email,password}=req.body
   const newUser= await new User({
    name,
    email,
    password 
   })
   newUser.save()

   res.send(newUser)
}
)

app.post('/login',async(req,res)=>{
    
    let {email,password}=req.body
  
    const user= await User.findOne({email:email})
    if(!user){
     res.status(400).json({message:"nO USERWITH SUCH EMAIL", success:false})
     return
    }
    if(user.password!==password){
        res.status(400).json({message:"INVALID PASSWORD", success:false})
        return
    }
    res.json({message:"lOGIN SUCCESSFUL", success:true, user})
   
 }
 )

app.listen(8088)
