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

app.use("/api/todos", todoRoutes);
app.use('/api', (req, res) => {
    res.json({
        success: true,
        message: "done 123456"
    })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});