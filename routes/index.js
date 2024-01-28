var express = require('express');

var router = express.Router();
var ddbb = require('../mods/dbs/checklicControl');
var dbbbLogin = require('../mods/dbs/checkloginControl');

//app.set('view engine', 'ejs');
router.get('/principal', function(req, res, next) {
    //req.session.destroy();
    if(req.session.hoainfo==undefined){ res.render('inicio', { title: 'Please log in ' });
    }else
    {
        //hoainfo=req.session.hoainfo.split(",");
        accountinfo=req.session.accountinfo;
        var keys=Object.keys(accountinfo)
        let valores=Object.values(accountinfo)
        let  hoakeys=Object.keys(req.session.hoainfo)
        let hoaval=Object.values(req.session.hoainfo)

    res.render('principal', { title: req.session.hoainfo.Client_Corporate_Name,
        keys:keys,valores:valores,
    hoakeys:hoakeys,hoaval:hoaval

});
    }
});


router.all('/newpayment', function(req, res, next) {
    //req.session.destroy();
    /*
    if(req.session.hoainfo==undefined){ res.render('inicio', { title: 'Please log in ' });
    }else
    {
        //var consul = require('../mods/dbs/consultas');
        res.end(200)("evrything is fine ")


    }*/
    res.status(200).end("aqui")
});

router.get('/logout', function(req, res, next) {
    req.session.destroy();
    res.render('inicio', { title: 'Express' });
});

router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});


router.get('/start', function(req, res, next) {


    if(req.session.hoainfo==undefined){
        res.render('inicio', { title: 'Express' });
    }else
    {//const hoainfo = req.session.hoainfo.split(",");//  const hoainfo = req.session.hoainfo.split(",");
        
        res.render('start', { title: req.session.hoainfo.Client_Corporate_Name});
    }

});



router.get('/inicio', function(req, res, next) {
    res.render('inicio', { title: 'Express' });

});




let multer = require('multer');
let upload = multer();

router.post('/checklogin', upload.fields([]), async function(req, res, next) {
    
    let chpassw=require("../public/javascripts/chpw2");
    let r=await chpassw.checklic()
 
    if(req.session.hoainfo==undefined){
        res.status(200).end("You are not logged in , please do it !");
    }else {
        var d =  dbbbLogin.checklogin(req,res,"console.log('iii')")
    }
   
});

router.all('/checkLic', function(req, res, next) {
    //let x=loadDoc('https://api.publicapis.org/entries', "myFunction"); //res.render('index', { title: 'Express' });
    //ddbb.main();
    var l=req.body.license;
    req.query={ln:l,LicenseType:"HOA"}
    var d =  ddbb.checklic(req,res,"console.log('iii')")
   // res.send(d)
});



router.all('/checkKYlogin', function(req, res, next) {
    //let x=loadDoc('https://api.publicapis.org/entries', "myFunction"); //res.render('index', { title: 'Express' });
    //ddbb.main();
    var l=req.query.user;
    req.query={ln:l,LicenseType:"HOA"}
    var d =  dbbbLogin.checkloginKYC(req,res,"console.log('iii')")
    //res.send(d)
});





router.get('/bot/alf/', function(req, res, next) {

    console.log("uuuu");



    if (!req.query["lic"]) {
        console.log("No hay license")
        res.send("No hay license")
    }  else {
        // res.send("No hay licensia");


        let lic = req.query["lic"] || "No hay license";
        res.send("Aqui miramos el bot");

        //res.render('index', { title: 'Express' });
    }

})
router.get('/', function(req, res, next) { 
    res.render('inicio', { title: 'Express' });
});







//old







module.exports = router;
