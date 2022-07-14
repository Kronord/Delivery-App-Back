const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const productRouter = require('./Routes/Api/productsRouter');
const userRouter = require('./Routes/Api/usersRouter');

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use('/api', productRouter);
app.use('/api', userRouter);


app.use((req, res) => {
	res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
	const { status = 500, message = "Server error" } = err;
	res.status(status).json({ message: err.message });
});

module.exports = app;
