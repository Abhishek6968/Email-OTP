const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT;
require('./Db/connection')
const cors=require('cors');
app.use(cors());
app.use(express.json());
const morgan=require('morgan');
app.use(morgan('dev'))
const userRoutes=require('./routes/userRoutes');
app.use('/user',userRoutes);
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
