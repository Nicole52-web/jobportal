const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();
var cors =require('cors');


//import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobTypeRoutes = require('./routes/jobTypeRoutes');
const jobsRoutes = require('./routes/jobsRoutes');

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");





//database connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log("DB connected"))
.catch((err)=>console.log(err));

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "5mb"}));
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extended: true 
}));
app.use(cookieParser());
app.use(cors());

// //routes middleware
// app.get('/', (req, res)=>{
//     res.send("Hello from Nodejs");
// });
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoutes);
app.use('/api', jobsRoutes);



//error middleware
app.use(errorHandler);
//port
const port = process.env.PORT || 9000

//connection
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
});