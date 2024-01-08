import { app } from "./app.js"
import { connectDB } from "../db/connection.js"

const PORT = process.env.PORT;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((err) => {
    console.log(err)
})

