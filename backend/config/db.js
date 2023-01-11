import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    //////////////////////////////////////////////
    // No need for useCreateIndex, useUnifiedTopology, useNewUrlParser as it's automatically implemented into Mongoose (mongodb)

    console.log(`MongoDB Connected: ${conn.connection.host}`.purple);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectDB;
