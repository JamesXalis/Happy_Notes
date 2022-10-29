const router = require("express").Router();
const fs = require("fs");

router.get('/notes', (req,res) => {
    fs.readFile("db/db.json", (err, data) => {
        const db = JSON.parse(data);
        res.json(db);
    })
})


module.exports = router;