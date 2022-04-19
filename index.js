import express from 'express'
import path from "path";

const __dirname = path.resolve()
const PORT = 3000
const app = express()

/*app.use(express.static(path.resolve(__dirname, 'static')))*/

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'login.html'))
})

app.get('/registration', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'registration.html'))
})

app.get('/view_products', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'view_products.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'static', 'about.html'))
})

app.listen(PORT, ()=>{
    console.log(`Server has been started on port ${PORT}...`)
})