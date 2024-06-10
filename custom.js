let resultbox= document.getElementById("result");


function seeAppend(item){
    resultbox.value += item;

}
function DisplayResult(){
    try{
         resultbox.value = eval(resultbox.value);
    }catch(e){
        resultbox.value = console.error();
    }
}
function ClearResult(){
    resultbox.value = "";
}
function DelLastValue(){
    resultbox.value = resultbox.value.slice(0,-1);
}