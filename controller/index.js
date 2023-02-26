const ModelBlog = require("../model/blog");
const { handleSlugString } = require("../utils/utils");

const getAllProduct = async (req, res) => {
  try {
    const perPage = 10;
    const page = Math.max(0, req.query.page);
    const datasResponse = await ModelBlog.find({})
      .limit(perPage)
      .skip(perPage * page);

    return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};

const getProductById = async (req, res) => {
  try {
    const datasResponse = await ModelBlog.findOne({ slug: req.params.slug });

    return res.status(200).json({ data: datasResponse, statusMessage: "ok" });
  } catch (error) {
    console.log("err:", error);
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      title,
      body,
      author,
      description,
      imageUrl,
      keyWords,
    } = req.body;
    const handleSlug = handleSlugString(title);

    const datasCreate = new ModelBlog({
      author: author,
      title: title,
      description: description,
      body: body,
      imageUrl: imageUrl,
      slug: handleSlug,
      keyWords: keyWords,
    });

    datasCreate.save();
    return res
      .status(201)
      .json({ data: datasCreate, statusMessage: "create success" });
  } catch (error) {}
};

const updateProduct = async (req, res) => {
  try {
    const { _id, title } = req.body;

    let newObject = {
      ...req.body,
      slug: handleSlugString(title),
    };

    const dataUpdate = await ModelBlog.findByIdAndUpdate(_id, newObject, {
      new: true,
    });

    await dataUpdate.save();
    return res
      .status(201)
      .json({ data: dataUpdate, statusMessage: "Update success" });
  } catch (error) {}
};

const deleteProductById = async (req, res) => {
  try {
    const datasDeleteById = await ModelBlog.findByIdAndDelete(req.params.id);
    if (!datasDeleteById)
      return res.status(404).json({ statusMessage: "not found" });

    return res.status(201).json({ statusMessage: "delete success" });
  } catch (error) {}
};

const deleteProductAll = async (req, res) => {
  try {
    const datasDelete = ModelBlog.collection.deleteMany();
    return res.status(201).json({ statusMessage: "delete all datas success" });
  } catch (error) {}
};

const findProductByName = async (req, res) => {
  try {
    // const datasDelete = ModelBlog.
    console.log("req:", req.body.query);
    //  return res
    //     .status(201)
    //     .json({ data: datasDelete, statusMessage: "delete all datas success" });
  } catch (error) {}
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
  deleteProductAll,
  findProductByName,
};
