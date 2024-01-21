var express = require('express');
//var app = require('../');
var router = express.Router();
var ddbb = require('../mods/dbs/checklicControl');

//app.set('view engine', 'ejs');


router.get('/layout', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});


router.get('/start', function(req, res, next) {
    const hoainfo = req.session.hoainfo.split(",");
    res.render('start', { title: req.session.hoainfo.split(",")[16]});
});

router.get('/loginx', function(req, res, next) {
  res.render('login', { title: 'Mi login 1' });
});
router.all('/loginp', function(req, res, next) {
    res.render('login', { title: 'Mi login post' });
});
/*
router.get('/loginv3', function(req, res, next) {
  res.render('loginv3', { title: 'Express Login v2' });
});
*/
router.get('/loginform', function(req, res, next) {
  res.render('loginform', { title: 'Express Login v2' });
});

router.get('/inicio', function(req, res, next) {
    res.render('inicio', { title: 'Express' });



});
router.get('/index', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.get('/ind', function(req, res, next) {
    let x=loadDoc('https://api.publicapis.org/entries', "myFunction");
    res.render('index', { title: 'Express' });
});

router.all('/checklogin', function(req, res, next) {
    //let x=loadDoc('https://api.publicapis.org/entries', "myFunction");
    //res.render('index', { title: 'Express' });
    //ddbb.main();
    req.query={ln:"a1f1fbc4-599",LicenseType:"HOA"}
    var d =  ddbb.checklic(req,res,"console.log('iii')")
   // res.send(d)
});

router.all('/checkLic', function(req, res, next) {
    //let x=loadDoc('https://api.publicapis.org/entries', "myFunction");
    //res.render('index', { title: 'Express' });
    //ddbb.main();
    var l=req.body.license;
    req.query={ln:l,LicenseType:"HOA"}
    var d =  ddbb.checklic(req,res,"console.log('iii')")
   // res.send(d)
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


module.exports = router;
