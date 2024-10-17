import { connect } from 'mongoose';

const connectDB = async () => {
    try {
        const connection = await connect(process.env.MONGO_URI);
        console.log(`Database connected to ${connection.connection.host}`);    
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;