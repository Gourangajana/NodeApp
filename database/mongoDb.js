import mongoose from "mongoose"

const connectToDB = async() => {
    try {
        const {connection} = await mongoose.connect(
            'mongodb+srv://gourangaegra:ZKDDCfWto05fnS0y@cluster0.ffipeau.mongodb.net/learngjnode?retryWrites=true&w=majority'
        )
        if (connection) {
            console.log(`Connected to database: ${connection.host}`);
        }
    } catch(e) {
        console.log('Error connecting');
    }
}

export default connectToDB;