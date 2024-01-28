const message = "How you doing?";
console.log(message);
var miform={
    html:"hola, este es un form temporal para chequear el usuario",
   // allowOutsideClick: false,
      allowEscapeKey: false,
    //title: 'Welcome to EasyPay',
    text: 'Please insert the HOA License ',
    icon: 'success',
    showCancelButton: false,
    icon:"success",
    

  preConfirm: async () => {

    try {
      console.log("preconfirm")
      /*
        const githubUrl = `https://api.github.com/users/$Devba"}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }
       */
     
  }
  catch (error) {
    console.log(error);
  }

  }
};

  var swnofounde={
    html:"hola, este es un form temporal para chequear el usuario",
   
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Try again',
    
    icon:"error",

  preConfirm: async () => {

    try {
      return;
        const githubUrl = `https://api.github.com/users/$Devba"}
        `;
        const response = await fetch(githubUrl);
        if (!response.ok) {
          return Swal.showValidationMessage(`
            ${JSON.stringify(await response.json())}
          `);
        }
        return response.json();
      } catch (error) {
        Swal.showValidationMessage(`
          Request failed: ${error}
        `);
      }

  }
   
}