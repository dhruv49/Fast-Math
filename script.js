function addition(one,two){
    document.getElementById('result').innerHTML= parseInt(one)+parseInt(two)
    document.getElementById('result').style.display="block"
}
function substract(one,two){
    document.getElementById('result').innerHTML= parseInt(one)-parseInt(two)
    document.getElementById('result').style.display="block"
}
function divide(one,two){
    document.getElementById('result').innerHTML= parseInt(one)/parseInt(two)
    document.getElementById('result').style.display="block"
}
function multiply(one,two){
    document.getElementById('result').innerHTML= parseInt(one)*parseInt(two)
    document.getElementById('result').style.display="block"
}
function clear(){
    document.getElementById('result').style.display="none"
}