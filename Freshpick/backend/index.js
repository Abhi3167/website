//   const express=require('express')
// // import express


// // use express

// const app=express()

// app.get('/data',(req,res)=>{
    
//     res.send("Hello from the backend")
//     })

// //app.listen(8080)







































// const express=require("express")
// //import express

// const myapp=express()

// myapp.get('/details',(req,res)=>{
//     res.send("Hello from the backend")
// })
// myapp.listen(8088)
































const User = require('./db/user')
const express=require("express")
//import express
require('./db/db')

const application=express()
application.use(express.json())

application.get('/Freshpick',(req,res)=>{
    res.send("Hello world")
})

application.get('/user',async(req,res)=>{
    
    const user= await User.find()
    console.log(user ,"this is user data")
    res.send(user)
}
)

application.post('/user',async(req,res)=>{
    
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

application.listen(8088)
