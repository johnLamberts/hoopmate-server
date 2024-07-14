import { Application } from "express";
import mongoose from "mongoose";

const bootstrap = async (app: Application) => {
  try {
    const PORT: number = parseInt(`${process.env.PORT}`, 10) || 5921;

    app.listen(PORT, () => {
      console.log(`Server is running at: http://localhost:${PORT}`);
    });

    const mongoConnection = await mongoose.connect(
      process.env.DATABASE_URI as string
    );

    if (mongoConnection.STATES.connected) {
      console.log("You have been successfully connected to the MongoDB ❤️");
    }

    mongoose.connection.on("error", (error) => {
      console.log(
        "1. 🔥 Common Error caused issue → : check your .env file first and add your mongodb url"
      );

      console.error(`2. 🚫 Error → : ${error.message}`);
    });
  } catch (err) {
    console.error(err);
  }
};

export default bootstrap;
