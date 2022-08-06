const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/auth');
const PostRoute = require('./routes/post');
const UserRoute = require('./routes/user');
require('dotenv').config();

// init app 
const app = express();

// middlewares 
app.use(cors());
app.use(express.json({ limit: "100mb" }));
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));

// all routes 
app.get('/', (req, res) => res.send("You are connected succesfuly"))
const baseURL = '/api/v1'

app.use(`${baseURL}/auth`, AuthRoute);
app.use(`${baseURL}/post`, PostRoute);
app.use(`${baseURL}/user`, UserRoute);

try {
    mongoose.connect("mongodb+srv://rahat6713:1819rahat@cluster0.iee0y.mongodb.net/wowTalent?authSource=admin&replicaSet=atlas-ivk86y-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", { useNewUrlParser: true });
    console.log(`MongoDB Connection Successful`);
} catch (error) {
    console.log(error);
}

const port = process.env.PORT || 3000;
app.listen(port, console.log(`Express App running on ${port}`));