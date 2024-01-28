var express = require('express');
//var KeychainSDK= require("@hiveio/keychain");
var router = express.Router();

router.get('/sw2', async function(req, res, next) {


    //const login =  await keychain.login();
    res.render('tests/sw2');
});
router.get('/sw2res', async function(req, res, next) {

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }, null, 3));
    //const login =  await keychain.login();

});


router.get('/ccard', async function(req, res, next) {

    res.render('cardpayments/ccard');

});

module.exports = router;