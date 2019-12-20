const express = require('express')
const app = express()//creating express object
const port = process.env.PORT || 3000
app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.htm'))
app.get('/login', (req, res) => res.send('Login!'))
app.get('/register', (req, res) => res.send('Register!'))
var student={"name":"Sairajesh","roll":"1719","college":"vnr"}
app.get('/stu', (req, res) => res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))