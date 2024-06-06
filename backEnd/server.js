import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import loginRoutes from './routes/login.routes.js'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.use(loginRoutes)
app.listen(PORT, console.log(`Corriendo en  http://localhost:${PORT}`))
