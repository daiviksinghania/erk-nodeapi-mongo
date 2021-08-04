const assert = require("assert");
const Student = require("../src/student");

describe("Read the data", () => {
    let json;
    beforeEach((done) => {
        json = new Student({name: "kumar"});
        json2 = new Student({name: "kumar"});
        json.save()
        json2.save()
        .then(() => done());
        console.log(json);
        console.log(json2)
    })

    it("Find all kumar", async () => {
        const students = await Student.findOne({ _id: json._id})
        // const students = await Student.find({ name: 'kumar'})
        assert(students.name === "kumar")
        // assert(students[0]._id.toString() === json._id.toString())

    });
})