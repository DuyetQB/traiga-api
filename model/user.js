const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
  avatarUrl: { type: String, default:null},
  role: { type: String, default: 'User'},
  userId: { type: ObjectId,default:null,ref:'collection'},
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
},{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }})

const Users = mongoose.model("users", UserSchema);

module.exports = Users;