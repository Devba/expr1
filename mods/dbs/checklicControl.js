const Post = require("./Post");
//var session = require('express-session');

exports.checklic=async(req,res,next) =>{
    try {
        if (typeof req.query.ln == 'undefined') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ noderes: "Incorrect HOA License" }, null, 3));
            return

        }

        let ln=req.query.ln.trim();
        let LicType=req.query.LicenseType

        if (LicType=="HOA") {
            let [post, _] = await Post.tablaHoaClient(ln);

            function test(value, index, array) {return value            }

            const lic = post.filter(test);
            console.log("-- checklic---" + ln + "--" + LicType);
            console.log(req.socket.remoteAddress);

            let datetime = new Date();
            console.log(datetime);


            if (lic.length==0){res.status(200).end("Not a valid License" )}
            else
            { 
                 let r=Object.values(lic["0"]).toString();
                 req.session.hoainfo=lic["0"];
                 res.status(200).end(r);
        }

        }
        else if(LicType=="MGT"){
            let [post, _] = await Post.tablaMgtClient(ln);
            res.status(200).json({post});
            //res.status(200).json("MGT");

        }
        else {
            res.status(400).json("Not recognized Licensetype");

        }
    } catch(error){res.send(error.message)}
};