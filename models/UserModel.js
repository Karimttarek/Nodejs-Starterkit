const mongoose = require('mongoose');
const schema = mongoose.Schema;

const UserSchema = new schema({
    name: {
        fname: {type:String , required:true},
        lname:{type:String}
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required: true
    },
    verified:{
        type:Boolean,
        default:true
    }
} , { timestamps:true});

const User = mongoose.model('User' , UserSchema);
module.exports = User;