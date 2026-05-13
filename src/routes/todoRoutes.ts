import express, { Request, Response } from "express";
import Todo from "../models/Todo";

const router = express.Router();

// GET all todos
router.get("/", async (_req: Request, res: Response) => {
    const todos = await Todo.find();
    res.json(todos);
});

// CREATE todo
router.post("/", async (req: Request, res: Response) => {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
});

// UPDATE todo
router.put("/:id", async (req: Request, res: Response) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.json(todo);
});

// DELETE todo
router.delete("/:id", async (req: Request, res: Response) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
});

export default router;