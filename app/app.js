// results
function changeText() {

let principal = parseFloat(document.getElementById("principle").value);
let rate = parseFloat(document.getElementById("interest-rate").value);
let time = parseFloat(document.getElementById("time").value);

let total = principal * (rate * time + 1);

document.getElementById("final-results").innerHTML = "With a beginning principle of " + principal + " and with a growth rate of " + rate + "% for " + time + " years, your total interest will be $" + principle* (++rate * time ) + " with a grand total of $" + total;
console.log("hello");
}