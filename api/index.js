const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

const app = express();

dotenv.config();
// app.use(express.static('public'));
// app.use(bodyParser.urlencoded({
//     extended: true
// }));
mongoose.connect(process.env.mongo_link);
mongoose.connection.once('open', () => {
    console.log("Connected");
});

//middleware
app.use(express.json());
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/posts',postRoute);

app.get("/",(req,res)=>{
    res.send("welcome to homepage");
})

app.get("/",(req,res)=>{
    res.send("");
})

const port = process.env.port;
app.listen(port,()=>{
    console.log(`backend server is running at http://localhost:${port}`);
});