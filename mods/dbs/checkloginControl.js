const consul = require("./consultas");

exports.checklogin=async(req,res,next) =>{
    try {
        if (typeof req.body.nombre == 'undefined') { res.status(200).end("no ln "); return }
        if (typeof req.body.mail == 'undefined') { res.status(200).end("no mail "); return }
        if (typeof req.body.passw == 'undefined') { res.status(200).end("no passw "); return }
        if (typeof req.body.account == 'undefined') { res.status(200).end("no account "); return }
        let vaccount=req.body.account.trim();
        //let LicType=req.query.LicenseType


        let [r, _] = await consul.checklogin(vaccount);
        let l=r.length;
        console.log(l);
        if (l>0){
            req.session.accountinfo=r[0];
            res.status(200).end("OK");
        }
        else{
            res.status(200).end("Account is not correct");
        }



    } catch(error){res.send(error.message)}
};

/*
     try {
         let l1=req.query.LicenseType
         let LicType=l1.toUpperCase();
         console.log(LicType)
     }catch{ console.log("no hay LicenseType"); res.status(400);res.end("No hay Licensetype"); return
           }

     if (LicType=="HOA") {
         let [post, _] = await Post.tablaHoaClient(ln);

         function test(value, index, array) {return value
         }

         const lic = post.filter(test);
         console.log("-- checklic---" + ln + "--" + LicType);
         console.log(req.socket.remoteAddress);

         let datetime = new Date();
         console.log(datetime);

         //res.status(200).end({lic})
         let r=Object.values(lic["0"]).toString();
         res.status(200).end(r);
         // res.status(200).json({lic});
     }
     else if(LicType=="MGT"){
         let [post, _] = await Post.tablaMgtClient(ln);
         res.status(200).json({post});
         //res.status(200).json("MGT");

     }
     else {
         res.status(400).json("Not recognized Licensetype");

     }*/