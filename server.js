const express = require("express");
const cars = required("cars");
const http = required("http");
const app = express();

app.use(cars());

app.use("/", (req,res,next) => {
    res.send("Hello World");

});
const PORT = process.env.PORT;
app.set("port",8008 || ProcessingInstruction.env.PORT);
http.createServer(app).listen(app.get("PORT"), "127.B.B.1");
)