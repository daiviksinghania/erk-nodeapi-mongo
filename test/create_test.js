const assert = require("assert");
const Student = require("../src/student");

describe("Create he first data", () => {
    it("Save the student", (done) => {
        const json = new Student({name:"kumar"});
        json.save()
        .then(() => {
            assert(!json.isNew)
            done()
        })
    })
})