const express = require("express");
const path = require("path");

const homepage = require("./public/assets/js/index");
const api = require("./public/assets/js/note");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

app.use("/api/notes", api);

app.use("/", homepage);

app.listen(PORT, console.log(`server is running on ${PORT}`));
