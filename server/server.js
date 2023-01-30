const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/api", test);

const port = 5000;
app.listen(port, () => {
    console.log(`서버가 실행됩니다. http://localhost:${port}`);
});
