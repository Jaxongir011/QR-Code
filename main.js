document.getElementById("text").focus();

document.querySelector(".runBtn").addEventListener("click", () => {
    document.getElementById("qrimage").setAttribute('src', 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+document.getElementById("text").value);
});