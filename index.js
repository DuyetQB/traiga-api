
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const router = require("./router/index.js");
require('dotenv').config()
const PORT = 3002
const morgan = require('morgan');

// mongoose.connect('mongodb://localhost/trai-ga',{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });
let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
// let corsOptions = {
//     origin: 'https://lenodev.com',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

// app.use(express.json({limit: '50mb'}));
// app.use(express.urlencoded({limit: '50mb'}));
// app.use(express.json({limit: '50mb',extended:false}));
app.use(express.json({ extended: false, limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }))
app.use(cors());
app.use(morgan("dev"));

// mongodb+srv://dinhsyduyet:<password>@cluster0.hy4q0.mongodb.net/?retryWrites=true&w=majority

// var dburl   =  "mongodb://0.0.0.0:27017/demo";
const dbUrl = process.env.DATABASE_URL;
console.log("dbUrl",dbUrl)
mongoose.connect(dbUrl, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', dbUrl) }) 
    .catch((err) => { 
        console.error("err:",err);
     });



app.use("/",router);

app.listen(PORT,function(){
    console.log(`app is runing on port-${PORT} `);
})

// "engines": {
//     "node": ">=16"
//   },