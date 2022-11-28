const ModelBlog = require("../model/blog");

const getAllProduct = async (req, res) => {
  
  try {
    const perPage = 10;
    const page = Math.max(0, req.query.page);
    const datasResponse = await ModelBlog.find({}).limit(perPage).skip(perPage * page);

  return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};

const getProductById = async (req, res) => {
  try {

    const datasResponse = await ModelBlog.findOne({_id:req.params.id});

    return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};


const createProduct = async (req, res) => {
  try {
    const { title, body , author , description , imageUrl , imageThumbnailUrl } = req.body;

    const datasCreate = new ModelBlog({
      author:author,
      title: title,
      description:description,
      body: body,
      imageUrl:imageUrl,
      imageThumbnailUrl:imageThumbnailUrl
    });

    datasCreate.save();
    return res
      .status(201)
      .json({ data: datasCreate, statusMessage: "create success" });
  } catch (error) {}
};

const updateProduct = async (req, res) => {
  try {
    const { author, title, description, imageUrl, imageThumbnailUrl, body } =
      req.body;

    console.log("req.params:", req.params.id);
   
    const dataDb = await ModelBlog.findById(req.params.id);
    const datasUpdate = await ModelBlog.update({
      author: author,
      title: title,
      description: description,
      body: body,
      imageUrl: imageUrl,
      imageThumbnailUrl: imageThumbnailUrl,
    });

    datasUpdate.save();
    return res
      .status(201)
      .json({ data: datasCreate, statusMessage: "create success" });
  } catch (error) {}
};

const deleteProduct = async (req, res) => {
  try {
    const { title, body } = req.body;

    console.log(" title , body:", title, body);
    const datasCreate = new ModelBlog({
      title: title,
      body: body,
    });

    datasCreate.save();
    return res
      .status(201)
      .json({ data: datasCreate, statusMessage: "create success" });
  } catch (error) {}
};

const deleteProductAll = async (req, res) => {
  try {
    const datasDelete = ModelBlog.collection.deleteMany()
   return res
      .status(201)
      .json({ data: datasDelete, statusMessage: "delete all datas success" });
  } catch (error) {}
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteProductAll
};
