function calcInt(){
let principal = parseFloat(document.getElementById("principle").value);
let rate = parseFloat(document.getElementById("interest-rate").value);
let time = parseFloat(document.getElementById("time").value);


}
// results

function changeText() {

document.getElementById("final-results").innerHTML = "With a beginning principle of " + pricipal + " and with a growth rate of " + rate + "% for " + time + " years, your total interest will be $";
}