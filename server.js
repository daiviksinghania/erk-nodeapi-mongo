const express = require("express");

const app = express();

const bodyParser = require("body-parser");


app.use(bodyParser.json());

app.use(require("./middleware/headers"));
app.use(require("./middleware/validate-session"));

app.use("/test", function(req, res){
    res.send("Welcome to Nodejs Api");
});

app.use("/api/students", require("./routes/students"));
app.use("/api/login", require("./routes/sessions"))

app.listen(4000, function(){
    console.log("App is listening on port 4000...")
})
