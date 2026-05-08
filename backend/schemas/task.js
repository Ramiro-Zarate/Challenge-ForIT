import * as z from 'zod'

const TaskSchema = z.object({
    title: z.string().min(3, 'El titulo es obligatorio').max(255, 'El titulo debe tener menos de 255 caracteres'),
    description: z.string().max(255, 'La descripcion debe tener menos de 255 caracteres').optional(),
    completed: z.boolean().default(false)
})