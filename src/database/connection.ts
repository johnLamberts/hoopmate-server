import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI as string, {
      dbName: process.env.DATABASE_NAME,
    });

    console.log("Database connected successfully".bg_green);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

export default connectDB;
