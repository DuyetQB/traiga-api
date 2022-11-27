const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  id: ObjectId,
  isAdmin:Boolean,
  userId:Number,
  avatarUrl: { type: String, default:null},
  isAdmin: { type: Boolean, default: false},
  userId: { type: Number, default: null},
  action: { type: String, default: 'System'},
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
},{ timestamps: true })
;

const User = mongoose.model("user", UserSchema);

module.exports = User;