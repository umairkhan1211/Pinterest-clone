const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pinterest');

const userSchema = mongoose.Schema({
  username : String,
  name: String,
  password: String,
  email:String,
  profileImage:String,
  contact: Number,
  boards : {
    type : Array,
    default: []
  },
  posts:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'post'
    }
  ]

});

userSchema.plugin(plm);

module.exports = mongoose.model('user',userSchema);