const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");

console.log("Run statement");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log("MongoDB is connected!");
  } catch (err) {
    console.error("Error somewhere iwo Oloun: ", err.stack);
    process.exit(1);
  }
};

// mongoose.connection
//   .once("open", () => {
//     console.log("Connection! Rejoice!");
//   })
//   .on("error", (error) => {
//     console.log("Connection error: ".error);
//   });

module.exports = connectDB;
