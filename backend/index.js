import express from "express";
import cors from "cors";
const app = express();


const PORT = 7000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Backend is working",
        success:true
    })
})





app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`);
});