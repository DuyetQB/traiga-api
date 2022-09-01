
const Model = require("../../model/index");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
console.log("req:",req);
res.send("wellcome to my website");

})
.get("/api/product", async (req, res) => {

    try {
    
    //     const datasResponse =  new Model({
    //         title:  "duyet yeu em nhieu hahabb nn",
    //         body: "body"
    //     });
    
    //     await datasResponse.save();
    
    //     await Model.find({},function(err, data){
    
    //        return res.status(200).json(data);
    //    }).clone()

    const data = [{
        title:"dinh si duyet yeu em",
        body:"yeu cai do",
        slug:"hehe"
    }]
    return res.status(200).json(data);
    
    } catch (error) {
        console.log("err:",error);
    }
})


module.exports = router;