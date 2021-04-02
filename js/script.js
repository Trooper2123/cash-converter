document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

function converter(){
var moneyToConvet = document.getElementById("money").value;
var dolarValue = 5.50;
var result = (moneyToConvet/dolarValue).toFixed(2);
document.getElementById("result").innerHTML = result+"U$";
}