import { TaskModel } from "../models/task.js"

export class TaskController {
    static async getAll(req, res) {
        const tasks = await TaskModel.getAll()
        res.json(tasks)
    }

    static async getById(req, res) {
        const { id } = req.params
        const task = await TaskModel.getById({ id })
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada' })
        }
        res.json(task)
    }

    static async create(req, res) {
        const newTask = await TaskModel.create({ input: req.body })
        res.status(201).json(newTask)
    }

    static async delete(req, res) {
        const { id } = req.params
        const result = await TaskModel.delete({ id })

        if (!result) {
            return res.status(404).json({ message: 'Tarea no encontrada' })
        }

        return res.json({ message: 'Tarea eliminada con éxito' })
    }

    static async update(req, res) {
        const { id } = req.params
        const updatedTask = await TaskModel.update({ id, input: req.body })

        if (!updatedTask) {
            return res.status(404).json({ message: 'Tarea no encontrada' })
        }

        return res.json(updatedTask)
    }
}