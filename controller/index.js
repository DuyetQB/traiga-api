const Model = require("../model/index");

const getAllProduct = async (req,res) =>{
    try {
    
        const datasResponse =   await Model.find({})
  
   return res.status(200).json({data:datasResponse,statusMessage:"ok"});
      
      } catch (error) {
          console.log("err:",error);
      }
}

const createProduct = async (req,res) =>{
    try {

        const { title , body } = req.body;

        console.log(" title , body:", title , body)
        const datasCreate = new Model({
            title: title,
            body: body
        });
    
         datasCreate.save();
         return res.status(201).json({data:datasCreate,statusMessage:"create success"});

    } catch (error) {
        
    }
}

module.exports = {
    getAllProduct,
    createProduct
};