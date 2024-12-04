import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'


//app config
const app = express()
const port = 5000


//middleware
app.use(express.json())   // whenever we get a request from frontend to backend that will be passed using json
app.use(cors())    // using this we can access backend from any frontend


//db connection
connectDB();

app.get("/",(req,res)=>{
  res.send("API working")
})

app.listen(port,()=>{
  console.log(`Server started on http://localhost:${port}`)
})

//mongodb+srv://fooddelivery:shanishashi2024@cluster0.rmhkh.mongodb.net/?