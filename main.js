let opc;
opc = '';

//variaable del Dom
let $btnPorcent = document.getElementById("%");
let $btnP = document.getElementById(".");
let $btn0 = document.getElementById("0");
let $btn1 = document.getElementById("1");
let $btn2 = document.getElementById("2");
let $btn3 = document.getElementById("3");
let $btn4 = document.getElementById("4");
let $btn5 = document.getElementById("5");
let $btn6 = document.getElementById("6");
let $btn7 = document.getElementById("7");
let $btn8 = document.getElementById("8");
let $btn9 = document.getElementById("9");
let $consola = document.getElementById("consola");

//variables globales
let numberOne;
let numberTwo = 0;
let signo = '';

//clicks de botones
$btn1.addEventListener('click', ()=>{
    const number = '1';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn2.addEventListener('click', ()=>{
    const number = '2';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn3.addEventListener('click', ()=>{
    const number = '3';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn4.addEventListener('click', ()=>{
    const number = '4';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn5.addEventListener('click', ()=>{
    const number = '5';
    opc = opc + number;
    $consola.innerHTML = opc;
});
$btn6.addEventListener('click', ()=>{
    const number = '6';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn7.addEventListener('click', ()=>{
    const number = '7';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn8.addEventListener('click', ()=>{
    const number = '8';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn9.addEventListener('click', ()=>{
    const number = '9';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btn0.addEventListener('click', ()=>{
    const number = '0';
    opc = opc + number;
    $consola.innerHTML = opc;
})
$btnP.addEventListener('click', ()=>{
    const number = '.';
    opc = opc + number;
    $consola.innerHTML = opc;
})

//funciones de operaciones aritmeticas
function suma() {
    signo = '+';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}

function porcentaje(){
    signo = '%';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}

function resta(){
    signo = '-';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}

function multiplicacion() {
    signo = '*';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}
function division() {
    signo = '/';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}

//funciones de la calculadora
function borrar(){
    $consola.innerHTML = ' ';
    opc = '';
}
function eliminar() {
    opc = opc.substring(0, opc.length-1);
    $consola.innerHTML = opc;
}
function igual() {
    let result = 0;

    //verificacion de numeros decimales
    if (isfloat(numberOne) || isfloat(opc)) {
        numberTwo = parseFloat(opc);
        numberOne = parseFloat(numberOne);
    } else {
        numberOne = parseInt(numberOne)
        numberTwo = parseInt(opc);
    }

    //calculo de los numeros
    switch (signo) {
        case '+':
            result = numberOne + numberTwo;
            $consola.innerHTML = result;
        break;
        case '-':
            result = numberOne - numberTwo;
            $consola.innerHTML = result;
        break;
        case '*':
            result = numberOne * numberTwo;
            $consola.innerHTML = result;
        break;
        case '/':
            debugger
            result = numberOne / numberTwo;
            $consola.innerHTML = result;
        break;
        case '%':
            result = numberOne % numberTwo;
            $consola.innerHTML = result;
        break;

        default:
            break;
    }
    
}

//verificacion de numeros decimales
function isfloat(n) {
    for (let i = 0; i < n.length; i++) {
        debugger
       if(n.charAt(i)==="."){
           return true;
           i=n.length;
       } 
    }
    return false;
}