import express from "express";
import cors from "cors";
const app = express();
import agentsRoutes from "./routes/asiagents.route";
import swarmRoutes from "./routes/swarm.route";
import userRoutes from "./routes/user.route";
import { connectDB } from "./utils/db";


const PORT = 7000;

//connect to db
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


app.get("/",(req,res)=>{
    return res.status(200).json({
        message:"Backend is working",
        success:true
    })
})

app.use("/api/asiagents", agentsRoutes);
app.use("/api/swarm", swarmRoutes);
app.use("/api/user", userRoutes);




app.listen(PORT,()=>{
    console.log(`Server is running at : ${PORT}`);
});
