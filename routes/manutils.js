
var express = require('express');

var router = express.Router();
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

module.exports = router;