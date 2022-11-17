const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  name: String,
  password: String,
  email:String,
  avatarUrl:String,
  isAdmin:Boolean,
},{ timestamps: true })
;

const User = mongoose.model("user", UserSchema);

module.exports = User;