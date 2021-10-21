var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', {layout:'auth'});
});

router.get('/register', (req, res) => {
    res.render('register', {layout: ''});
})


module.exports = router;