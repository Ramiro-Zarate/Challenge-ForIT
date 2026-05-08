import express from 'express'
import { corsMiddlware } from './middlwares/cors.js'
import { taskRouter } from './routes/task.js'

const PORT = 3000
const app = express()
    
app.use(corsMiddlware())
app.use(express.json())

app.use('/api/tasks', taskRouter)

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto 'http://localhost:${PORT}'`)
})

