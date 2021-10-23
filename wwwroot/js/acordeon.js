var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", accordionFuction);
}

function accordionFuction() {
    this.classList.toggle("active");// visibilidad
    var panel = this.nextElementSibling;// devuelve el elemento que sigue al especificado, en el mismo nivel
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}