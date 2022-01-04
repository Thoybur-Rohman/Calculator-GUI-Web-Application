function getHistory(){
        return document.getElementById("history-value").innerText;
}
//alert(getHistory())
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
        document.getElementById("output-value").innerText= getFormattedNumber(num);
}
function getFormattedNumber(num){
    const n = Number(num)
    const value = n.toLocaleString("en");
    return value;
}
printOutput("35655613");