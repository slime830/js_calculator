const display = document.getElementById("display")

const isHeadInt = (numberStr) => Number.isInteger(parseInt(numberStr)) && numberStr != "0";

var symbolFlag = false;

const calculate = (button)=>{
    value = button.value;
    if(value === "=" && display.value != ""){
        display.value = eval(display.value)
    }else if(value === "C"){
        display.value = ""
        symbolFlag = false;
    }else if(display.value === ""){
        if(isHeadInt(value)){
            display.value += value;
            symbolFlag = false;
        }else if (value === "-"){
            display.value += value;
            symbolFlag = true;
        }
    }else{
        console.log(value)
        if(value === "+" || value === "-"){
            if(symbolFlag){
                value="";                
            }else{
                symbolFlag = true;
            }
        }else if(value === "×"){
            if(symbolFlag){
                value = "";
            }else{
                value = "*";
                symbolFlag = true;
            }
        }else if (value === "÷"){
            if(symbolFlag){
                value = "";
            }else{
                value = "/";
                symbolFlag = true;
            }
        }
        console.log(value)
        display.value += value;
    }
}