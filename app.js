const items = document.querySelectorAll("td progress");
const bar = document.querySelector("#bar");
const indicator = document.querySelector("#indicator");
var num = 0;
var numTotal = 0;
var maxTotal = 0;
var max = 0;
console.log(items.length);
for(i=0;i<items.length;i++){
    num = parseInt(items[i].value);
    max = parseInt(items[i].max);

    numTotal += num;
    maxTotal += max;
}
var percent = (numTotal * 100) / maxTotal;
var rounded = percent.toFixed(2);
bar.style.width = percent+"%";
indicator.textContent = rounded+"%";
console.log(rounded);