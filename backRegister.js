//#region Variables

credenciales = {}

//#endregion

var usuario;
var contrasena;

function readFormData() {
    var formData = {};
     usuario = formData["login__username"] = document.getElementById("login__username").value;
    
    contrasena = formData["login__password"] = document.getElementById("login__password").value;
    return formData;
}

function resetForm() {
    document.getElementById("login__username").value = "";
    document.getElementById("login__password").value = "";
    selectedRow = null;
}

function validate() {
    readFormData();
    isValid = true;
    if (usuario.value == "" && contrasena.value == "") {
        isValid = false;
        alert("Campos vacios");
    } else {
        isValid = true;
        window.location.replace('index.html');
        console.log("usuario: ", usuario);
        alert("Bienvenido : " + usuario);
    }
    return isValid;
}