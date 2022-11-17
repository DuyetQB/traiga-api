const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  id: ObjectId,
  author: String,
  title: String,
  description:String,
  body: String,
  imageUrl:String,
  imageThumbnailUrl:String,

},{ timestamps: true });

const BlogPostUser = mongoose.model("collection", BlogPost);

module.exports = BlogPostUser;