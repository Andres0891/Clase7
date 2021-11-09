window.sr = ScrollReveal()
sr.reveal(".box1",{
    origin: 'left',
    interval: 106,
    duration: 2000,
    distance: '150%'
})


function encender(){
document.getElementById("img").src = "pic_bulbon.gif";
}
function apagar(){
    document.getElementById("img").src = "pic_bulboff.gif";
    }
    

function CambiarRojo(){
    document.getElementById("fondo").style.backgroundColor="Red";
}

function CambiarVerde(){
    document.getElementById("fondo").style.backgroundColor="Green";
}

function CambiarNegro(){
    document.getElementById("fondo").style.backgroundColor="Black";
}

function agregar(){

    var ListaCompras= document.getElementById("lista");
    var dato = document.getElementById("dato").value;
    var li = document.createElement("li");
    li.textContent = dato;
    ListaCompras.appendChild(li);

}
function eliminar(){
    var ListaCompras= document.getElementById("lista");
    ListaCompras.removeChild(ListaCompras.lastElementChild);
}