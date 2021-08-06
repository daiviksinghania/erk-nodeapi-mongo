import { connect, connection } from 'mongoose';

const mongoConnectionUrl = 'mongodb://localhost:27017/students'

try {
    await mongoose.connect(mongoConnectionUrl, { useNewUrlParser: true, useUnifiedTopology: true});
    console.log("database connection Established");
} catch (error) {
    console.log(error);
    handleError(error);
}
