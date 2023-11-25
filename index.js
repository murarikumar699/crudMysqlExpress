const express = require("express");
const app = express();
const route = require("./routes/route");
require("./config/db");
const PORT=9000;
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(route);
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})