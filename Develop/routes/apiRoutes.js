const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();


router.get("/api/notes", (req, res) => {
    const dbData = JSON.parse(fs.readFileSync("./db/db.json"));
    res.jason(JSON.parse(dbData));
});


module.exports = router