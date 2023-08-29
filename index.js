const express =require('express');
const app = express();
 
require('dotenv').config();
const PORT = process.env.PORT;
app.use(express.json());



app.listen(PORT,()=>{
    console.log("server started succesfully");
});

const dbConnect = require('./config/database');
dbConnect();

const router = require('./routes/blog');
app.use('/api/v1',router);

app.get('/',(req,res)=>{
    res.send("hello babes");
})




