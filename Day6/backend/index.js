import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db";

dotenv.config();

const app = express();
app.use(express.json())

// app.get("/",(res,req)=>{
//     res.send("Welcome")
// })
connectDB();
const PORT = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${PORT}`)
}