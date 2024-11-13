const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    email:
    {type:String,
     required:true,
       
    },
    otp:{
        type:String,
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: 300, // The document will expire after 5 minutes (300 seconds)
      }
});
const user=mongoose.model('user',userSchema);
module.exports=user;