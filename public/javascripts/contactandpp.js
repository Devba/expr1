console.log("ccapp")
$('#contact').on('click', function(evt) {
    Swal.fire("We are listening");
    return false;//Returning false prevents the event from continuing up the chain
});

$('#pp').on('click', function(evt) {
    Swal.fire("This is a secret");
    return false;//Returning false prevents the event from continuing up the chain
});