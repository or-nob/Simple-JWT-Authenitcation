var express = require("express");
var router = express.Router();
const config = require("../config.json");
const jwt = require("jsonwebtoken");

router.post("/", (req, res, next) => {
    try {
        if (req.body.email === "email" && req.body.password === "pass") {
            const token = jwt.sign({ sub: req.body.email }, config.secret, {
                expiresIn: "5d",
            });
            res.json({ validation: "valid", token });
        } else res.send({ validation: "invalid" });
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;
