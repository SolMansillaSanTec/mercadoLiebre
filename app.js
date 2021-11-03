const express = require("express");
const app = express();
const path = require ('path');
app.use(express.static("public"));

app.listen(3030, () => {
    console.log("corriendo");
});

app.get("/", (req,res) => {

    res.sendFile(path.join(__dirname, './views/home.html'));

});

app.get("/registro", (req,res) => {

    res.sendFile(path.join(__dirname, './views/register.html'));

});