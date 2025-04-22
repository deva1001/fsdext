const express=require('express')

const app=express()
app.use(express.json())

const mongoose=require('mongoose')



app.listen(2000,()=>{console.log("Server started on port 2000")})

mongoose.connect("mongodb://127.0.0.1:27017/fsd")
.then(()=>console.log("Connected to MongoDB"))
.catch((err)=>console.log(err))

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
})

const userModel=mongoose.model("user",userSchema)

app.post("/api/users",async(req,res)=>{

    const user=await userModel.create(req.body)

    res.status(200).json(user)
})

app.get("/users/:id",async(req,res)=>{

    const id=req.params.id
    const user=await userModel.findById(id)
    res.json(user)
})




app.put("/update/:id",async(req,res)=>{
    
    const id=req.params.id
    const user=await userModel.findByIdAndUpdate(id,req.body)

    res.json(user)
})
app.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id

    const user=await userModel.findByIdAndDelete(id)

        res.json(user)
})