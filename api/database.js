import mongoose from "mongoose"
import 'dotenv/config'

const databaseUrl = process.env.MONGO_KEY
const dbConnection = async () => {
    try {
        await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Database successfully connected')
    } catch (error) {
        console.error(`Database Connectivity Error: ${error}`)
        throw new Error(error)
    }
}
export default dbConnection