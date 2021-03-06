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

    let torlesBtn = document.createElement("label");
    torlesBtn.innerHTML = "X";
    torlesBtn.className = "torlesBtn";
    torlesBtn.addEventListener("click", torles);
    listaElem.appendChild(torlesBtn);
    

    document.getElementById("lista").appendChild(listaElem);
}

function elvegezve(e) {
    let elvegzett = e.target.parentNode;
    let szoveg = elvegzett.getElementsByTagName("label")[0];
    szoveg.classList.toggle("athuz");
}

function torles(e){
    e.target.parentNode.remove();
}

function init() {
    document.getElementById("hozzaadGomb").addEventListener("click", hozzaad);
}

document.addEventListener("DOMContentLoaded", init);