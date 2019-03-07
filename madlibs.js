var noun1 = window.prompt("For this madlibs, give a noun");
var org1 = window.prompt("Name a company or organization");
var org2 = window.prompt("Name a group of people/company");
var task1 = window.prompt("Name a task that you can complete");
document.getElementById("noun1").innerText = noun1;
document.getElementById("org1").innerText = org1;
document.getElementById("org2").innerText = org2;
document.getElementById("task1").innerText = task1;
var one = document.getElementById("noun1");
var two = document.getElementById("org1");
var three = document.getElementById("org2");
var four = document.getElementById("task1");


function nounOne(){
    var newWord = window.prompt("Change the word");
    document.getElementById("noun1").innerText = newWord;
}

document.getElementById("noun1change").onclick = nounOne;

