
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var session = require('express-session');
var cookieParser = require('cookie-parser');
const express = require("express");
var router = express.Router();
var ddbb=require("../mods/dbs/control2")



var Users = [1,1];



router.get('/signup', function(req, res){
    res.render('dusts/signup/signup',{
        message: "Registrese"});
});

router.post('/signup', function(req, res){
    if(!req.body.id || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
    } else {
        Users.filter(function(user){
            if(user.id === req.body.id){
                res.render('signup', {
                    message: "User Already Exists! Login or choose another user id"});
            }
        });
        var newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/su/protected_page');
       //res.redirect('/dusts/signup/protected_page');
    }
});
function checkSignIn(req, res,next){
    if(req.session.user){
        next();     //If session exists, proceed to page
    } else {
        var err = new Error("Not logged in!");
        console.log(req.session.user);
        next(err);  //Error, trying to access unauthorized page!
    }
}
router.get('/protected_page', checkSignIn, function(req, res){
    res.render('dusts/signup/protected_page', {id: req.session.user.id})
});

router.get('/login', function(req, res){
    res.render('dusts/signup/login');
});

router.post('/login', function(req, res){
    console.log(Users);
    let found=false;
    req.query.ln="2222";
    req.query.LicenseType="HOA"
    let db=ddbb.ch(req,res);
    if(!req.body.id || !req.body.password){
        res.render('dusts/signup/login', {message: "Please enter both id and password"});
    } else {
        Users.filter(function(user){
            if(user.id === req.body.id && user.password === req.body.password){
                req.session.user = user;
                //res.redirect('protected_page');
                found=true;
                res.render('dusts/signup/protected_page');

            }


               // res.render('dusts/signup/login', {message: "Invalid credentials!"});

        });
        if (found){return}
        res.render('dusts/signup/login', {message: "Invalid credentials!"});
        return
    }
    console.log("Aaaa")
});

router.all('/logout', function(req, res){
    req.session.destroy(function(){
        console.log("user logged out.")
    });
    res.redirect('/su/login');
});

router.use('/protected_page', function(err, req, res, next){
    console.log(err);
    //User should be authenticated! Redirect him to log in.
    res.redirect('/su/login');
});



module.exports = router;

