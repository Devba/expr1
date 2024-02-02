var express = require('express');
const chpassw = require("../public/javascripts/chpw2");
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


router.all('/newhoa', async function(req, res, next) {
    if (req.method=="POST"){
        let Con  = require("../mods/dbs/consultasv2");

        //let Q=new Q()

        let r=await Con.newhivepayment(req)
        console.log(r[0])
        //return(r)

        let result=r[0].toString()
        res.status(200).end("New hoa inserted " + r[0].affectedRows)

    } else {
    res.render('tests/newhoa');
    }
});
router.get('/newhoa2', async function(req, res, next) {
    res.render('tests/newhoa2');
});

let multer = require('multer');
const Con = require("../mods/dbs/consultasv2");
let upload = multer();
router.post('/newhoainsert', upload.fields([]),async function(req, res, next) {
   var Con  = require("../mods/dbs/consultasv2");

        //let Q=new Q()

        let r=await Con.newhivepayment(req)
        console.log("ffff")
        //return(r)


    res.status(200).end("esto es todo amigos")
    //res.render('tests/newhoa');
});

module.exports = router;