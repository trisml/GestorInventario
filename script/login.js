

document.addEventListener("DOMContentLoaded", () => {
USUARIO = "DiegusNueva"
PIN_USUARIO = "DiegoGrande"

function checkLogin(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === USUARIO && password === PIN_USUARIO) {
        window.location.href = "../templates/index.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
document.getElementById("btnLogin").addEventListener("click", checkLogin);
});

