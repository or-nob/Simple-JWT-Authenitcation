var express = require("express");
var router = express.Router();

/* GET home page. */
router.post("/", function (req, res, next) {
    try {
        res.json({ message: "from secured backend" });
    } catch (err) {
        res.json(err.message);
    }
});

module.exports = router;
