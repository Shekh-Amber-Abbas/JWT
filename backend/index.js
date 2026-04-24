const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
 const cookie = require('cookie-parser');
const userRouter = require('./Router/userRouter');
const stRouter = require('./Router/stRouter');
require('dotenv').config();
const app = express();
app.use(cookie())
// const port = 5000;
mongoose.connect(process.env.MONGOURL)
.then(()=>console.log('DB Connected'))
.catch((error)=>console.log((error)))
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(express.json());
// app.use('/api/user',userRouter)
app.use('/api/user', stRouter)

// app.get('/',(req,res)=>{
//     res.send({"msg":"success"})
// })
app.listen(process.env.PORT,()=>console.log(`server is running on ${process.env.PORT}`));