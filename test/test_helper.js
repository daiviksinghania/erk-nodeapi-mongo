const mongoose = require("mongoose");
const { deleteOne } = require("../src/student")

mongoose.connect('mongodb://localhost:27017/students_test', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection
    .once("open", () => console.log("connected"))
    .on("error", (error) => {
        console.log("An error occured", error)
    })

beforeEach((done) => {
    mongoose.connection.collections.students.drop();
    done()
})