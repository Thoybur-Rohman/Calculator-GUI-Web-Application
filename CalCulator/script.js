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
    let n = Number(num)
    let value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

const operator = document.getElementsByClassName("operator");
for (let i = 0 ; i < operator.length ;i++){
    operator[i].addEventListener('click',function(){
        if (this.id == "clear"){
            printHistory("");
            printOutput("");
        }
        if (this.id = "backspace"){
            let output=reverseNumberFormat(getOutput()).toString();
            if (output){
                 output = output.substr(0,output.length-1)
                printOutput(output);

            }

        }
    });
}
var number = document.getElementsByClassName("number");
for(let i =0; i<number.length; i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){ //if output is a number
            output=output+this.id;
            printOutput(output);
        }
    });
}
