const express = require('express')
const app = express()

const cors = require('cors')
const jwt = require('jsonwebtoken')
const brcrypt = require('bcryptjs')
const mongoose = require('mongoose')
app.use(cors())
app.use(express.json())

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/e-commerce-DApp', { useNewUrlParser: true })

const User = require('./models/user.model')
const Contact = require('./models/contactModel')
app.post('/api/contact', async (req, res) => {
    try {
        const contact = await Contact.create({
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            message: req.body.message
        })
    } catch (error) {
        console.log(error)
    }
})


app.post('/api/register', async (req, res) => {
    try {
        const hashedPassword = await brcrypt.hash(req.body.password, 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: hashedPassword,
        })
        res.json({ status: 'ok' })
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if (!user) {
            return res.json({ status: 'error', error: 'User does not exists with this email Id' })
        }
        const isValidPassword = await brcrypt.compare(req.body.password, user.password)
        if (isValidPassword) {
            //sign JWT Token
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email
                }
                , 'secret1234')
            return res.json({ status: 'ok', user: token })
        } else {
            return res.json({ status: 'error', user: false })
        }
    } catch (error) {
        console.log(error)
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.listen(5000, () => {
    console.log('Server started')
    console.log(mongoose.connection.readyState);
})

