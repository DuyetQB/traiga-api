const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  id: ObjectId,
  author:Object,
  title: String,
  description:String,
  body: String,
  keyWords:Array,
  slug: String,
  imageUrl:String,
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

const BlogPostUser = mongoose.model("collection", BlogPost);

module.exports = BlogPostUser;