const totalItems = document.querySelectorAll("td:nth-child(2)");
const farmedItems = document.querySelectorAll("td:nth-child(3)");
const progressBar = document.querySelectorAll("progress");
const totalProgress = document.querySelector("#bar");
const indicator = document.querySelector("#indicator");
var farmSum = 0;
var reqSum = 0;
for(i=0;i<totalItems.length;i++){
    var totalNum = parseInt(totalItems[i].textContent);
    var farmNum = parseInt(farmedItems[i].textContent);

    var farmPercent = farmNum * 100;
    var percent = farmPercent / totalNum;
    progressBar[i].value = percent;
    farmSum += farmNum;
    reqSum += totalNum;
}
var totalPercent = (farmSum * 100) / reqSum;
totalProgress.style.width = totalPercent+"%";
var rounded = totalPercent.toFixed(2);
indicator.textContent = rounded+"%";