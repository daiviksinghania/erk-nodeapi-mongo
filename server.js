import express from 'express'
import routes from './src/routes/students'
import bodyParser from 'body-parser'

const app = express()

const PORT = 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// app.use(require("./src/middleware/headers").default);
// app.use(require("./src/middleware/validate-session").default.default);

app.use("/test", function (req, res) {
    res.send("Welcome to Nodejs Api");
});

app.use('/api/',routes);

app.listen(PORT, () => {
    console.log(`you are server is running on ${PORT}`);
})
