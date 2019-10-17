const express = require('express');
const app = express();

var PORT = process.env.PORT || 3001

// These lines allow to Express to parse info placed in a url as well as JSON data.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});