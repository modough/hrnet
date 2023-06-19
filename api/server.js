import express, { json, urlencoded } from 'express'
import cors from 'cors'
import dbConnection from './database.js'
import employeesRoute from './routes/employeesRoute.js'
import adminRoute from './routes/adminRoute.js'


const app = express()
const PORT = 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(json())
app.use(urlencoded({ extended: true }))

// Handle custom routes
app.use('/api', employeesRoute)
app.use('/api', adminRoute)


app.get('/', (req, res, next) => {
    res.send('Connected to the server !')
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})