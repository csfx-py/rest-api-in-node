require('dotenv').config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const bodyParser = require("body-parser");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/testDB";
const mongoose = require("mongoose");

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
}));



app.get('/', (req,res) => {
    res.send("hello");
});

app.listen(PORT, () => {
    console.log("Listening on port 3000");
});