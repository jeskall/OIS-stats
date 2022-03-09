const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan');
const bodyparser = require("body-parser")

const app = express();
dotenv.config({path:'config.env'})


const PORT = process.env.PORT || 8080


app.use(morgan('tiny'));

app.use(bodyparser.urlencoded({extended:true}))

app.set("view engine", "ejs")



app.get('/',(req,res)=>{
    res.send("index.html")
})

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});
