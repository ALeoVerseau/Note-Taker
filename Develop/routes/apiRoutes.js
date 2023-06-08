const fs = require("fs");
const uuid = require("uuid");
const router = require("express").Router();

// get route for notes
router.get("/api/notes", (req, res) => {
    const dbData = JSON.parse(fs.readFileSync("./db/db.json"));
    res.jason(JSON.parse(dbData));
});

// post req for notes
router.post("/notes", (req, res) => {
    const dbData = JSON.parse(fs.readFileSync("./db/db.json"));
    const newNote = {
        titie: req.body.title,
        text: req.body.text,
        id: uuid.v4(),
    };
    dbData.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(dbData));
    res.json(dbData)
});


module.exports = router