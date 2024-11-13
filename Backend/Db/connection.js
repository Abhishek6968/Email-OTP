const mongoose=require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.mongoDB_URL)
.then(()=>{
    console.log('Connected to databse')
})
.catch((err)=>{
    console.log("Error connecting to database")
})