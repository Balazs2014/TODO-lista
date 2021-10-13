function hozzaad() {
    let todo = document.getElementById("inputId").value;
    document.getElementById("inputId").value = "";
    
    let listaElem = document.createElement("li");

    let jelolonegyzet = document.createElement("input");
    jelolonegyzet.setAttribute("type", "checkbox");
    jelolonegyzet.addEventListener("click", elvegezve);
    listaElem.appendChild(jelolonegyzet);

    let szoveg = document.createElement("label");
    szoveg.innerHTML = todo;
    listaElem.appendChild(szoveg);
    listaElem.append(" X");

    

    document.getElementById("lista").appendChild(listaElem);
}

function elvegezve(e) {
    let elvegzett = e.target.parentNode;
    let szoveg = elvegzett.getElementsByTagName("label")[0];
    szoveg.classList.toggle("athuz");
}

function init() {
    document.getElementById("hozzaadGomb").addEventListener("click", hozzaad);
}

document.addEventListener("DOMContentLoaded", init);