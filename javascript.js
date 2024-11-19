document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por contactarnos! Pronto responderemos a tu consulta");
    this.reset();
});
