import {Router} from 'express'
import { TaskController } from '../controllers/task.controller.js'
import { validateTask, validatePartialTask } from '../schemas/task.js'

export const taskRouter = Router()

function validateCreate(req, res, next) {
    const result = validateTask(req.body)
    if (!result.success) {
        return res.status(400).json({ message: 'Datos inválidos', errors: result.error.errors })
    }
    req.body = result.data
    return next()
}

function validateUpdate(req, res, next) {
    const result = validatePartialTask(req.body)
    if (!result.success) {
        return res.status(400).json({ error: JSON.parse(result.error.message)})
    }
    req.body = result.data  
    return next()
}

taskRouter.get('/', TaskController.getAll)
taskRouter.get('/:id', TaskController.getById)
taskRouter.post('/', validateCreate, TaskController.create)
taskRouter.delete('/:id', TaskController.delete)
taskRouter.put('/:id', validateUpdate, TaskController.update)