const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;

const mal = require('./data/mal.json');

app.use(cors());

app.get('/', (req, res) =>{
    res.send('Simple Firebase Server is Up')
})

app.get('/myanimelist', (req, res) =>{
    res.send(mal);
})

app.listen(port, () => {
    console.log(`Server is Running on Port: ${port}`);
    // use `` instead of '' to use dynamic function ${}
})