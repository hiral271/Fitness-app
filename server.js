const mongoose = require("mongoose");
const express = require("express");

//port with env for herokuApp
const PORT = process.env.PORT || 3000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));



//mongoose connection
//same uri key for heroku to add 

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/fitness',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.use(require("./routes/api.js"));

app.use(require("./routes/html.js"));

app.listen(PORT, () => {
    console.log(`This  app is running  on this PORT: ${PORT}`)
});
