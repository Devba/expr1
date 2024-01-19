require("dotenv").config();
const mysql=require('mysql2');
var bcrypt = require('bcrypt');
const pool=mysql.createPool({


    host: 'www.1mag1na.xyz',
    user: 'hoaddbb',
    password: 'VFSAME',
    database: 'hoacontabo'

});




//let sql="select * from AuthFeebyLicense";
let sql="select * from ResidentsPayable";

pool.execute(sql,function (err,result){
    if (err) throw err;
    //console.log(result);
    //console.log(result[0]["Res_Password"]);
    for (let i = 0; i < result.length; i++) {

        console.log(result[i]["License"]);
        /*
        var hash = result[i]["Res_Password"];
        //hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
        bcrypt.compare("20000", hash, function(err, res) {
            if (res===true){
                console.log("oiio")
            }
           console.log(res);
        });*/

    }



});
module.exports=pool.promise();