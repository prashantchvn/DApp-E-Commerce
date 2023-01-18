const express = require('express')
const app = express()

const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/e-commerce-DApp', { useNewUrlParser: true })

const User = require('./models/user.model')

app.post('/api/register', async (req,res)=>{
    try {
        const user = await User.create({
            name : req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: req.body.password,
        })
        console.log(user)
        res.json({status : 'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

app.post('/api/login', async (req,res)=>{
    try {
        const user = User.findOne({
            email: req.body.email,
            password: req.body.password
        })
        if(user){
            //sign JWT Token
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email
                }
            ,'secret1234')
            return res.json({status: 'ok', user: token})
        }else{
            return res.json({status: 'error', user: false})
        }
    } catch (error) {
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

app.listen(5000,()=>{
    console.log('Server started')
    console.log(mongoose.connection.readyState);
})

