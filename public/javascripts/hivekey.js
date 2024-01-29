


console.log("olaaaa desde hivekeychain modulo");


function insertnewhivepaym(url){

    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({a: 1, b: 'Textual content'})
    })
        .then((response) => {
            console.log(response);
            window.location.replace("/principal?lic=1")
            // handle the response
        })
        .catch(function() {
            // handle the error
            console.log("popopop")
        });

}
function getrespay(url){

    fetch(url)
        .then((response) => {
            console.log(response);
            window.location.replace("/principal?lic=1")
            // handle the response
        })
        .catch(function() {
            // handle the error
            console.log("popopop")
        });

}


function xxxxinsertnewhivepaym(url){

    fetch(url)
        .then((response) => {
            console.log(response);
            window.location.replace("/principal?lic=1")
            // handle the response
        })
        .catch(function() {
            // handle the error
            console.log("popopop")
        });

}

$('#bhive').click(async function () {
    if ($("#keychname").val() == "") {
        Swal.fire("Please enter a valid user");
        return
    }
    try {
        hive_keychain.requestHandshake(function () {
            console.log('Handshake received!');
        });
    } catch (error) {
        console.log(error);
        Swal.fire("no hay hive")
        return false
    }


    try {
        var r = await hive_keychain.requestEncodeMessage(
            $("#keychname").val(),
            "hoamanager",
            "#prueba ",
            "Posting",
            function (response) {
                console.log('main js response - verify key');

                console.log(response);
                if (response.success) { // and response="OK"
                    miform.html = "Confirmed! , Wait while retrieving account info from server "
                    Swal.fire(miform);
                    Swal.showLoading();
                    console.log("after bhive");
                    let user = $("#keychname").val()
                    let url = "/checkKYlogin?user=" + user
                    let mres = getrespay(url);

                } else {
                    swnofounde.html = "error dont have priviledges ";
                    Swal.fire(swnofounde);

                }


            }
        );
    } catch (error) {
        console.log(error)
    }
})

console.log("aqui");


    $('#sendTokens').click(function () {
        hive_keychain.requestSendToken(
            $('#tokens_username').val(),
            $('#tokens_to').val(),
            $('#tokens_qt').val(),
            $('#tokens_memo').val(),
            $('#tokens_unit').val(),
            function (response) {
                if (response.success) {
                    Swal.fire(response.message);
                    insertnewhivepaym("/insertnewhivepaym");
                    return true
                } else {
                    Swal.fire(response.error );
                    return false
                }
            }
        );
    });



$('#sw-handshake').click(function () {
  try {
    hive_keychain.requestHandshake(function () {
      console.log('Handshake received!');
    });}
    catch(error){
      console.log(error);
      Swal.fire("no hay hive")
      
    }

  });
  
  // All transactions are sent via a swRequest event.
  
  // Send decryption request
  $('#send_decode').click(function () {
    hive_keychain.requestVerifyKey(
      $('#decode_user').val(),
      $('#decode_message').val(),
      $('#decode_method option:selected').text(),
      function (response) {
        console.log('main js response - verify key');
        console.log(response);
      },
    );
  });
  
  $('#send_encode').click(() => {
    hive_keychain.requestEncodeMessage(
      $('#encode_user').val(),
      $('#encode_receiver').val(),
      $('#encode_message').val(),
      $('#encode_method option:selected').text(),
      function (response) {
        console.log('main js response - verify key');
        console.log(response);
      },
    );
  });

