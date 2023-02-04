let outputScreen = document.getElementById("output-screen");
function display(num){
    outputScreen.value += num;
}
function calculate(){
    try{
        outputScreen.value=eval(outputScreen.value);
    }
    catch{
        outputScreen.value="Error";
    }
}
function Clear(){
    outputScreen.value="";
}
function Del(){
    outputScreen.value=outputScreen.value.slice(0,-1);
}
