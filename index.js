const express = require("express");
const connectDB = require("./config/db");
const config = require("./config/db");
const app = express();

// Connect to the database

connectDB(config.get(mongoURI));

app.use(express.json({ extended: false }));

// Defining Routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));
console.log("this is working");

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
