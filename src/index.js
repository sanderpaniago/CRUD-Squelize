const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3333
const bodyParser = require('body-parser')

const model = require('./models/index')
const pessoasRouter = require('./routes/pessoas')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/pessoas', pessoasRouter)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

model.sequelize.sync().then(()=> {
    app.listen(port, () => console.log('CRUD-ORM Listening...' + port))
})
