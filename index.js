const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://gayeong:abcd1234@cluster0.qnpsd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('MongoDB Connected...')).catch(err=>console.log(err))


app.get('/',(req,res)=> res.send('H'))
app.listen(port, ()=>console.log(`exapp port : ${port}`))