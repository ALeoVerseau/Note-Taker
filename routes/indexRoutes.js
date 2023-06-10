const path = require ("path");
const router = require("express").Router();

// get request for index.html
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../pulblic/index.html"));
});

// get request for notes.html
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router