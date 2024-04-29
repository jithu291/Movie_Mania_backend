const express = require('express'); 
const router = express.Router();
const users = require('../Models/user');
// const authController = require('../Controllers/authController');

// Register a new user
router.post('/register',  async (request, response) => {
    try {
        if (!request.body.username ||
            !request.body.email ||
            !request.body.password) {
            return response.status(400).send({
                message: 'Send all required fields'
            });
        }
        const existingUser = await users.findOne({ email: request.body.email })
        if (existingUser) {
            response.status(406).json("user already exist..please login")
        } else {
            const newUser = {
                username: request.body.username,
                email: request.body.email,
                password: request.body.password
            }
            const user = await users.create(newUser)
            return response.status(200).send(user)
        }
    }
    catch{

    }
})

// Login an existing user
router.post('/login', async (req, res) => {
    console.log('inside login');
    try {
        if (!req.body.username ||
            !req.body.password) {
            return res.status(400).send({
                message: 'send all required fields'
            })
        }
        const existingUser = await users.findOne({
            username: req.body.username,
            password: req.body.password
        })
          if(existingUser){
            res.status(200).json({
                message: 'login successful',
                user: existingUser
            })     
          }else{
            res.status(400).json({
                message: 'login failed , invalid Email/Password'
            })
          }

    } catch (error) {
        console.log(error);
    }
});

module.exports = router;