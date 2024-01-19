const express=require('express');
const chlcontrollers=require('./checklicControl');
const control2 = require("./control2");
const router=express.Router();

router.route("/").get(chlcontrollers.checklic)
router.route("/aaa").all(control2.ch)
//.post(postcontrollers.newpost);

module.exports = router