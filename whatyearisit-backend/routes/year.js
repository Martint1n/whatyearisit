var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
    res.json({
        Date: "2077"
    });
});

module.exports = router;