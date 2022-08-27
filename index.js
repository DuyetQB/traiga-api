
const express = require("express");
const app = express();
const port = process.env.BASE_URL || 3000;
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const Model = require("./model/index");
const product = require("./api/products/index.js");


// mongoose.connect('mongodb://localhost/trai-ga',{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });
var servermg = "mongodb+srv://dinhsyduyet:dinhsyduyet@cluster0.hy4q0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongodb+srv://dinhsyduyet:<password>@cluster0.hy4q0.mongodb.net/?retryWrites=true&w=majority

var dburl   =  "mongodb://0.0.0.0:27017/demo";
mongoose.connect(servermg, { useNewUrlParser: true,useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', servermg) }) 
    .catch((err) => { 
        console.error("err:",err);
     });

app.use(express.json({extended:false}));


app.get("/",function(req,res) {
    
res.send("wellcome to my website");
}
)

app.use("/api/product",product);

app.listen(port,function(){
    console.log(`app is runing on port ${port}`);
})