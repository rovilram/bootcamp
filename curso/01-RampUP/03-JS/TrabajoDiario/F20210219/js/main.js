let mensaje="está mal";


document
    .getElementById("login")
    .addEventListener("change", () => {
        if (document.getElementById("login").value ==="") {
            showErrorMessage(mensaje);
            this.style.backgroundColor="red";
        }
        else {
            document.getElementById("loginErrorMessage")
            .innerText="Está bien";
        }
    });


function showErrorMessage(message) {
    document.getElementById("loginErrorMessage").innerText=message;
}

function showError() {
    if (document.getElementById("login").value ==="") {
        document.getElementById("loginErrorMessage")
        .innerText="Está Mal";
        this.style.backgroundColor="red";
    }
    else {
        document.getElementById("loginErrorMessage")
        .innerText="Está bien";
    }
}
