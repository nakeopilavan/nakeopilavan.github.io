var display = 0;

document.getElementById("numvalue").innerText = display;
function input(){
}
function clear(){
    display = 0;
    document.getElementById("numvalue").innerText = display;
}
document.getElementById("clear").onclick = clear;
document.getElementById("subtraction").onclick = sub;
document.getElementById("addition").onclick = add;
document.getElementById("multiplication").onclick = multiply;
document.getElementById("division").onclick = divide;

document.getElementById("1").onclick = 1;
document.getElementById("2").onclick = 2;
document.getElementById("3").onclick = 3;
document.getElementById("4").onclick = 4;
document.getElementById("5").onclick = 5;
document.getElementById("6").onclick = 6;
document.getElementById("7").onclick = 7;
document.getElementById("8").onclick = 8;
document.getElementById("9").onclick = 9;
document.getElementById("0").onclick = 0;