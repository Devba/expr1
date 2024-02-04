
console.log("Loading calculo pago")
var comision=1
function calcularauth(factorfee,fixedfee,Payfees) {

    console.log("dentro calculo ");
    if (isNaN($("#pam").val()) ) {return("Please enter a valid amount like 99.50") }
    if ($("#pam").val() == "") {return("Please fill the box with the amount")}
    if ($("#pam").val()<=0) {return("Please enter a numeric value") }
    if ($("#pam").val()>10000) {return("Please enter a value under 10,000 $") }
    aux=evenRound($("#pam").val(), 2)
    $("#pam").val(Number.parseFloat(aux).toFixed(2))

    ffee=parseFloat(factorfee);  fxfee=parseFloat(fixedfee)

    pago = evenRound($("#pam").val(), 2)
    val = +pago * ffee + fxfee
    val = evenRound(val, 2)
    jQuery("#cccd").text(val)    //val2 = +val * 0.01    //val2 = evenRound(val2, 2)
    jQuery("#asf").text(0)
    //total = Math.round((+val2 + val + parseFloat($("#pam").val())) * 100) / 100
    total = Math.round((( parseFloat($("#pam").val())/ffee) +fxfee)* 100) / 100
    //total =parseFloat($("#pam").val()) +val
    comision=evenRound(total-parseFloat($("#pam").val()),2)

    Payfees=true;
    if (Payfees==true ){

        $("#cccd").text(comision)//evenRound(total),2
        $("#tot").text(total)}
    else{
        $("#tot").text($("#pam").val())
        //$("#pam").val( evenRound($("#pam").val(), 2))
        $("#cccd").text(0)    //val2 = +val * 0.01    //val2 = evenRound(val2, 2)


    }
    Swal.fire("Total cost including fees :" +  total.toString() + " $", "");
    $("#paym").html("Payment :" +  total.toString() + " $")


    return true  ;
}


function evenRound(num, decimalPlaces) {
    var d = decimalPlaces || 0;
    var m = Math.pow(10, d);
    var n = +(d ? num * m : num).toFixed(8); // Avoid rounding errors
    var i = Math.floor(n), f = n - i;
    var e = 1e-8; // Allow for rounding errors in f
    var r = (f > 0.5 - e && f < 0.5 + e) ?
        ((i % 2 == 0) ? i : i + 1) : Math.round(n);
    return d ? r / m : r;
}




function gotoform() {

    var r="";
    if (isNaN($("#pam").val()) ) {r="Please enter a valid amount i.e. 99.50";}
    if ($("#pam").val() == "") {r="Please amount box can not be empty"}
    if ($("#pam").val()<=0) {r="Please enter a numeric value" }
    if ($("#pam").val()>10000) {r="Please enter a value under 10,000 $" }
    if (r!=""){
        sweetAlert("Please enter a valid amount i.e 10", r, "warning");
        return
    }
    //window.location.href = '/apiauth/ccform?am=' + $("#pam").val() + '&ccf=' + $("#cccd").html() + '&asf=' + $("#asf").html() + '&total=' + $("#tot").html()
    window.location.href = '/apiauth/ccform?am=' + $("#pam").val() + '&ccf=' + $("#cccd").html()
        + '&comision=' +comision + '&asf=' + $("#asf").html() + '&total=' + $("#tot").html()
}

