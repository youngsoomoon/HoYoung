import express from "express";

const app = express();
const test = require("./test");

app.use("/api", test);

const port: number = 5001;
app.listen(port, () => console.log(`${port}`));
