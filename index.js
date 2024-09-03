import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import dbConnection from "./db/db.js"


const app = express()

dotenv.config()
dbConnection()


app.use(
    cors(
        {
            origin: '*',
        }
    )
)
app.use(express.urlencoded({extended: true }))
app.use(express.json())


app.post('/', (req,res) => {
    res.send('Yipee! backend is working fine')
})

app.listen(process.env.PORT, () => {
    console.log(`App is running on ${process.env.PORT}`)
})