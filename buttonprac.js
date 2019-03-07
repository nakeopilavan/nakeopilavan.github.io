var value = 0;

document.getElementById("numvalue").innerText = value;

function subone(){
    value -= 1;
    document.getElementById("numvalue").innerText = value;
}
function addone(){
    value += 1;
    document.getElementById("numvalue").innerText = value;
}
document.getElementById("subtraction").onclick = subone;
document.getElementById("addition").onclick = addone;
