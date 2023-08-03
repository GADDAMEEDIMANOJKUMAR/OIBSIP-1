function clearResult(){
    document.getElementById("result").value = "";
}
function appendResult(value){
    document.getElementById("result").value += value;
}
function calculate() {
try {
let expression = document.getElementById('result').value;
let result = eval(expression);
document.getElementById('result').value = result;
} catch (error) {
document.getElementById('result').value = 'Error';
}
}
