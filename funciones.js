function encender(){
    document.getElementById("img").src="pic_bulbon.gif";
}

function apagar(){
    document.getElementById("img").src="pic_bulboff.gif";
}

function CambiaAzul(){

    document.getElementById("fondo").style.backgroundColor="Blue";
}
function CambiaVerde(){

    document.getElementById("fondo").style.backgroundColor="Green";
}
function CambiaBlanco(){

    document.getElementById("fondo").style.backgroundColor="white";
}

function agregar(){
  var Lista = document.getElementById("lista");
  var dato = document.getElementById("Dato").value;
  var li = document.createElement("li");
  li.textContent=dato;
  Lista.appendChild(li);
  var miParrafo = document.createElement("p");

}
function eliminar(){
    var Lista = document.getElementById("lista");
    Lista.removeChild(Lista.lastElementChild);
    
}