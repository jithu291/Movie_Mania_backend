// // const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const users = require('../Models/user');

// //register
// // exports.register = async (req, res) => {
// //     const { username, email, password } = req.body;
// //     try {
// //         const existingUser = await users.findOne({ email });
// //         console.log(existingUser);
// //         if (existingUser) {
// //             res.status(400).json("User already exists");
// //         } else {
// //             const newUser = new users({
// //                 username, email, password
// //             });
// //             await newUser.save();
// //             res.status(200).json(newUser);
// //         }
// //     } catch (error) {
// //         res.status(401).json({ error: "Registration failed. Please try again later." });
// //     }
// // };

// //login
// exports.login = async (req, res) => {
//     const { username, password } = req.body;
//     console.log("Inside the Login request");
//     try {
//         //Check email,password already exists
//         const existingUser = await users.findOne({ username, password })
//         console.log(existingUser);
//         if (existingUser) {
//             //genearate Token using JWT
//             const token = jwt.sign({ userId: existingUser._id }, process.env.jwt_secret)
//             res.status(200).json({ existingUser, token })
//         } else {
//             res.status(406).json("Invalid Email/password")
//         }
//     } catch (error) {
//         res.status(401).json(error)
//     }
// }