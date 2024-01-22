var express = require('express');
//var KeychainSDK= require("@hiveio/keychain");
var router = express.Router();
//var KeychainSDK=new keychain
/*
const keychain = new KeychainSDK();
const data= {
    "username": "keychain.tests",
    "message": "{\"login\":\"123\"}",
    "method": "Posting",
    "title": "Login"
};
*/
router.get('/h2', async function(req, res, next) {


    //const login =  await keychain.login();
    res.render('hive/h2');
});

router.get('/', function(req, res, next) {


    const tx = new hiveTx.Transaction()
    tx.create(operations, expiration = 60)



    res.render('hive/hive');
});

module.exports = router;
