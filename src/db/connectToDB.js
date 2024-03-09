import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectToDB = async (req, res) => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(connection.connection.host);
  } catch (error) {
    console.log("Error connecting to the database: ", error.message);
    return res.status(503).json({ message: "Server Error" });
  }
};

export default connectToDB;
/**
 * (async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Not able to connect to the database");
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`App is running on ${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
})();
 */
