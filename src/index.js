const morgan = require('morgan')
const express = require('express')
const app = express()
const path = require('path')
const handlebars = require('express-handlebars')
const port = 3000
const sass = require('node-sass')

app.use(express.static(path.join(__dirname,'public')))
//HTTP Logger:
app.use(morgan('combined'))

//Template engine:
app.engine('hbs', handlebars({
  extname: '.hbs'
}));

// Hello mate

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));
 

// console.log('PATH: ', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
