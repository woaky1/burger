const express = require('express');
const app = express();


var PORT = process.env.PORT || 3001

// These lines allow to Express to parse info placed in a url as well as JSON data.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller");

app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});