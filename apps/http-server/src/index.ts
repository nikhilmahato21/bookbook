import express from "express"
import {prisma} from "@repo/db/client"

const app = express();
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello world!")
})

app.post('/signup',async (req,res)=>{
    const username = req.body.username
    const password = req.body.password
  const user =  await prisma.user.create({
    data:{
        username,password
    }
   })
    res.json({
        message:"signup successfull",
        id: user.id
    })
})

app.listen(5001);