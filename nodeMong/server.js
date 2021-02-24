const express = require('express')
const bodyParser=require('body-parser'); 
const api = require('./api'); 
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`))

app.use(bodyParser.urlencoded({extended: true}));  

app.use(bodyParser.json());  
  
app.use('/api', api);