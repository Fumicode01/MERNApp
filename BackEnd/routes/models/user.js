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
},
{timestamps:true}

);

module.exports = mongoose.model("User", UserSchema);
