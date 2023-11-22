let UserTempInput = document.getElementById("tempinput");
let CTOFCheckbox = document.getElementById("ctof"); 
let FTOCCheckbox = document.getElementById("ftoc");
let SubmitBTN = document.getElementById("submitbtn");
let OutputTempresult = document.getElementById("tempoutput");
let Temp;

CTOFCheckbox.onclick = function(){
    FTOCCheckbox.checked = false;
}
FTOCCheckbox.onclick = function(){
    CTOFCheckbox.checked = false;
}

function TempCoverterFunc(){

    if(CTOFCheckbox.checked){
        Temp = Number(UserTempInput.value);
        Temp = Temp * 9 / 5 + 32;
        OutputTempresult.textContent = Temp.toFixed(1) + "°F";
    }
    else if(FTOCCheckbox.checked){
        Temp = Number(UserTempInput.value);
        Temp = (Temp - 32) * (5/9);
        OutputTempresult.textContent = Temp.toFixed(1) + "°C";
    }
    else {
        OutputTempresult.textContent = "Select a Unit";
    }
}

SubmitBTN.onclick = function(){
    TempCoverterFunc();
}