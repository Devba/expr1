var auth = function(req, res, next) {
    if (req.session && req.session.user === "jose" && req.session.admin)
        return next();
    else
        return res.sendStatus(401);
};

//var ddbb=require('../../mods/ddbb');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();
function loadDoc(url) {
    let m =ddbb.main();
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function() {xFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}

function loadDocorig(url, xFunction) {
    const xhttp=new XMLHttpRequest();
    xhttp.onload = function() {xFunction(this);}
    xhttp.open("GET", url);
    xhttp.send();
}
function myFunction(xhttp) {
    console.log(xhttp.responseText)
    document.getElementById("demo").innerHTML =  xhttp.responseText;
}
console.log("aqui")
//loadDoc('https://api.publicapis.org/entries', myFunction)
module.export =loadDoc;