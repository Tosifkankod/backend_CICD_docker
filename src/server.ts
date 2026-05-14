import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/check', (req, res) => {
    console.log("😂😂😂😂😂")
    res.json({
        success: false,
        message: "Hello world this is tosifs"
    })
})
app.use("/api/todos", todoRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});