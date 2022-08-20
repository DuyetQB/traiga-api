
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const Model = require("./model/index");


// mongoose.connect('mongodb://localhost/trai-ga',{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });

var dburl   =  "mongodb://0.0.0.0:27017/demo";
mongoose.connect(dburl, { useUnifiedTopology: true })
    .then(() => { console.log('Connected to MongoDB: %s \n ', dburl) }) 
    .catch((err) => { 
        console.error("err:",err);
     });

app.use(express.json());


app.get("/",async function(req,res) {
    
try {
    
    const datasResponse =  new Model({
        title:  "duyet yeu em nhieu haha",
        body: "body"
    });

   await datasResponse.save();

   Model.find({},function(err, data){

       res.status(200).json(data);
   });

} catch (error) {
    console.log("err:",error);
}
}
)

app.listen(port,function(){
    console.log(`app is runing on port ${port}`);
})