const express = require('express');
const app = express();
const userroutes = require('./routes/userroutes');
const blogroutes = require('./routes/blogsroutes');

const mongoose = require('mongoose');
app.use(express.json());

const connectDB = async () => {
  await mongoose.connect('mongodb://localhost/new-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  console.log('Connected to the database');
};

// module.exports = connectDB;
connectDB();

app.listen(8000 , ()=>{
    console.log('server listening at port 8000....');
})
app.use('/user' , userroutes)
app.use('/blog' , blogroutes)