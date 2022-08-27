
const Model = require("../../model/index");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
console.log("req:",req);

try {
    
    const datasResponse =  new Model({
        title:  "duyet yeu em nhieu haha oo",
        body: "body"
    });

    await datasResponse.save();

    await Model.find({},function(err, data){

       res.status(200).json(data);
   });

} catch (error) {
    console.log("err:",error);
}
});


module.exports = router;