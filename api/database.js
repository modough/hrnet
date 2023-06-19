import mongoose from "mongoose"

const databaseUrl = 'mongodb+srv://modough:doughnut@clusterhrnet.b30uuwp.mongodb.net/'
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