require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const passwordReset = require("./routes/forgot-password");
const userAuthentication = require("./routes/userAuthentication");

// middlewares
app.use(cors())
app.use(express.json())

//mongoDb database connection
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/e-commerce-DApp', { useNewUrlParser: true })

app.listen(5000,()=>{
    console.log('Server started')
    console.log(mongoose.connection.readyState);
})

app._router.stack.forEach(function(r){
    if (r){
      console.log(r)
    }
  })

app.use("/api/password-reset", passwordReset);
app.use("/api", userAuthentication);