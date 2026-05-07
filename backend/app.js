import express from 'express'
import { corsMiddelware } from './middelwares/cors'

const PORT = 3000
const app = express()
    
app.use(corsMiddelware())

app.listen(PORT, () => {
    console.log(`Server corriendo en el puerto ${PORT}`)
})

