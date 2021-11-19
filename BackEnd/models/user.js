const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    rquired: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email:{
    type: String,
    rquired: true,
    max: 20,
    unique: true,
  },
  password:{
    type: String,
    rquire: true,
    min: 6,
  },
  profilePicrure:{
      type:String,
      default:"",
  },
  coverPicrure:{
    type:String,
    default:"",
},
followings:{
    type:Array,
    default:[]
},
isAdmin:{
    type:Boolean,
    default:false,
},
description:{
    type: String,
    max:50
},
city:{
    type: String,
    max:50
},
from:{
    type: String,
    max:50
},
relationship:{
    type: Number,
    enum:[1, 2, 3]
}
},
{timestamps:true}

);

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
