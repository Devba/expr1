const consul = require("./consultas");

function iterate(req,hoas){
    let res=false
    for (hoa of hoas) {
        if (hoa.License==req.session.hoainfo.License_Number)
        {console.log(hoa)};
        res=true
    }
    return res
}


exports.checklogin=async(req,res,next) =>{
    try {
        if (typeof req.body.nombre == 'undefined') { res.status(200).end("no ln "); return }
        if (typeof req.body.mail == 'undefined') { res.status(200).end("no mail "); return }
        if (typeof req.body.passw == 'undefined') { res.status(200).end("no passw "); return }
        if (typeof req.body.account == 'undefined') { res.status(200).end("no account "); return }
        let vaccount=req.body.account.trim();
        //let LicType=req.query.LicenseType


        let [r, _] = await consul.checklogin(vaccount);
        if (r.length>1)

        var vfound=iterate(req,r)
        if (!vfound){
            res.status(200).end("Account is not correct");
        }else {
            if (r.length>1){console.log("ojo , hay mas de una cuenta ")}
            req.session.accountinfo=r[0];
            res.status(200).end("OK");

        }






    } catch(error){res.send(error.message)}
};

