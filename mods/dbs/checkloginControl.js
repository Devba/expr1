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

const chpass=async() => {

    let chpassw=require("../../public/javascripts/chpw2");
    let r=await chpassw.checklic()
    console.log("ffff")
    return(r)
}

exports.aaa="soy yo";

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
            res.status(201).end("Account is not correct");
        }else {
            var passw=r[0].Res_Password
            var  y=await chpass()
            if (r.length>1){console.log("ojo , hay mas de una cuenta ")}

            req.session.accountinfo=r[0];
            res.status(200).end("OK");

        }






    } catch(error){res.send(error.message)}
};

exports.checkloginKYC=async(req,res,next) =>{
    try {

        
        let vaccount=req.query.ln;
        //let LicType=req.query.LicenseType


        let [r, _] = await consul.checkKYlogin(vaccount);
        //if (r.length>1)

        let vfound=(r.length>0);//iterate(req,r)
        
        if (!vfound){
            res.status(200).end("Account is not correct");
        }else {
            var passw=r[0].Res_Password
            var  y=await chpass()
            if (r.length>1){console.log("ojo , hay mas de una cuenta ")}

            req.session.accountinfo=r[0];
            res.status(200).end("OK");

        }  }catch(error){res.send(error.message)}
   };


        exports.insertnewpaym=async(req,res,next) => {
            try {

                let [r, _] = await consul.newhivepayment();
                //if (r.length>1)

                let vfound = true;//(r.length>0);//iterate(req,r)

                if (vfound) {
                    res.status(200).end("went fine ");
                } else {
                    var passw = r[0].Res_Password
                    var y = await chpass()
                    if (r.length > 1) {
                        console.log("ojo , hay mas de una cuenta ")
                    }

                    req.session.accountinfo = r[0];
                    res.status(200).end("OK");

                }


            } catch (error) {
                res.send(error.message)
            }
        }
