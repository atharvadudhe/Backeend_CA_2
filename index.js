const express = require('express');
require('dotenv').config;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())

app.get('/',(req,res) => {
    res.send("<h1>Hello! Welcome to my Assignment!</h1>")
})

app.post('/signup',(req,res) => {
    const {username, email, password, dob} = req.body;
    try{
        const UserDeatils = {
            "username": username,
            "email": email,
            "password": password,
            "dob": dob
        }
        if(!username || !email || !password){
            res.send(400).json({ error: "Enter All the required fields!"});
        } else if(username.length <= 0){
            res.send(400).json({ error: "Username cannot be empty" })
        } else if(email.length <= 0){
            res.send(400).json({ error: "Email cannot be empty" })
        } else if(password.length < 8 || password.length >= 16){
            res.send(400).json({ error: "Password length should be greater than 8 or less than or equal to 16" })
        }
        res.json({
            "message":"User created successfully!",
            UserDeatils
        });
    } catch(err){
        res.send(400).json({ error: err.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server running on the PORT:${PORT}`)
})