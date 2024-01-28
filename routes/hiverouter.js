var express = require('express');
//var KeychainSDK= require("@hiveio/keychain");
var router = express.Router();
var KeychainSDK=require("keychain-sdk");
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
router.get('/mainv3', async function(req, res, next) {


    //const login =  await keychain.login();
    res.render('hive/keychain/mainv3');
});

router.get('/', function(req, res, next) {


    //const tx = new hiveTx.Transaction()
    //tx.create(operations, expiration = 60)



    res.render('hive/hive');
});

router.get('/sdk', async function(req, res, next) {


    //const tx = new hiveTx.Transaction()
    //tx.create(operations, expiration = 60)
    //const isKeychainInstalled = async keychain.isKeychainInstalled();
    let k=new KeychainSDK.KeychainSDK()
    let isKeychainInstalled = await k.isKeychainInstalled()
    const keychain = new KeychainSDK;


    res.status(200).send("llegamos")
});

router.get('/keychain', async function(req, res, next) {

    res.render('hive/keychain/main');
});

module.exports = router;
