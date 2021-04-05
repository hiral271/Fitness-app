const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
//set port
const PORT = process.env.PORT || 3000;

const app = express();

//use logger
app.use(logger("dev"));

//parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fittrack", {
    useNewUrlParser: true,
    useUnifiedTopology: true ,
    useCreateIndex: true,
    useFindAndModify: false});

//require('./seeders/seed')

//use routes
// require('./routes/api')(app)
// require('./routes/html')(app)
app.use(require("./routes/html"));
app.use(require("./routes/api"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}..`);
})