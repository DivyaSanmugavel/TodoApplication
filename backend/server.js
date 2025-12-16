require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");
const todoRoutes = require("./routes/todos");
const { notFound, errorHandler } = require("./middleware/error");

const app = express();


connectDB();


app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => res.send("MERN Todo API is running"));
app.use("/todos", todoRoutes);


app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
