require("dotenv").config();
const mysql=require('mysql2');
const pool=mysql.createPool({


    host: 'www.1mag1na.xyz',
    user: 'hoaddbb',
    password: 'VFSAME',
    database: 'hoacontabo'

});

/*let sql="select * from AuthFeebyLicense";

pool.execute(sql,function (err,result){
    if (err) throw err;
    console.log(result)

});*/
module.exports=pool.promise();