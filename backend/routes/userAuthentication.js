
const jwt = require('jsonwebtoken')
const brcrypt = require('bcryptjs')
const User = require('./models/user.model')

app.post('/register', async (req,res)=>{
    try {
        const hashedPassword = await brcrypt.hash(req.body.password,10); 
        const user = await User.create({
            name : req.body.name,
            email: req.body.email,
            phoneNo: req.body.phoneNo,
            password: hashedPassword,
        })
        res.json({status : 'ok'})
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})

app.post('/login', async (req,res)=>{
    try {
        const user = await User.findOne({
            email: req.body.email
        })
        if(!user){
            return res.status(404).json({status: 'error', error: 'User does not exists with this email Id'})
        }
        const isValidPassword = await brcrypt.compare(req.body.password,user.password)
        if(isValidPassword){
            //sign JWT Token
            const token = jwt.sign(
                {
                    name: user.name,
                    email: user.email
                }
            ,process.env.SECRET_KEY)
            return res.json({status: 'ok', user: token})
        }else{
            return res.json({status: 'error', user: false})
        }
    } catch (error) {
        console.log(error)
        res.json({status: 'error', error: 'Duplicate email'})
    }
})
