import { connect, connection } from 'mongoose';

const mongoConnectionUrl = 'mongodb://localhost:27017/students'

try {
    await mongoose.connect(mongoConnectionUrl, { useNewUrlParser: true });
} catch (error) {
    handleError(error);
}
