const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv');
const cors=require("cors");//frontend servers collide so for that
dotenv.config();

//its a class hence its Joi and not joi

app.use(express.json());
//to prevent frontend
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

//to use x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

//ROUTES
const coursesRoute=require('./routes/courses');
app.use('/courses',coursesRoute);
const loginRoute=require('./routes/login');
app.use('/login',loginRoute);
const classRoute=require('./routes/class');
app.use('/class',classRoute);

app.get('/',(req, res) => {
  res.json({"hello":"welcome"});
  res.send("hello");
})

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser:true},
  () => {
    console.log("connected to db");
  }
);

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`listening on port ${port}....`));
