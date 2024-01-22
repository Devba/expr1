var express = require('express');
//var KeychainSDK= require("@hiveio/keychain");
var router = express.Router();

router.get('/swalert', async function(req, res, next) {


    //const login =  await keychain.login();
    res.render('tests/swalert');
});
module.exports = router;