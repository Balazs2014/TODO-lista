function hozzaad() {
    let todo = document.getElementById("inputId").value;
    document.getElementById("inputId").value = "";
    
    let listaElem = document.createElement("li");

    let jelolonegyzet = document.createElement("input");
    jelolonegyzet.setAttribute("type", "checkbox");
    listaElem.appendChild(jelolonegyzet);

    let szoveg = document.createElement("label");
    szoveg.innerHTML = todo;
    listaElem.appendChild(szoveg);
    listaElem.append(" X");

    document.getElementById("lista").appendChild(listaElem);
}


function init() {
    document.getElementById("hozzaadGomb").addEventListener("click", hozzaad);
}

document.addEventListener("DOMContentLoaded", init);