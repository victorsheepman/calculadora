let opc;
opc = '';
function Null(btn) {
    debugger
    if(btn === $suma){
        $resta = 0;
        $resta.onclick = undefined;
        $sustraccion = 0;
        $sustraccion.onclick = undefined;
        $division = 0;
        $division.onclick = undefined;
    }else if(btn === $resta){
        $suma = 0;
        $suma.onclick = undefined;
        $sustraccion = 0;
        $sustraccion.onclick = undefined
        $division = 0;
        $division.onclick = undefined;
    }else if(btn === $sustraccion){
        $suma = 0;
        $suma.onclick = undefined;
        $resta = 0;
        $resta.onclick = undefined;
        $division = 0;
        $division.onclick = undefined;
    }else if(btn === $division){
        $suma = 0;
        $suma.onclick = undefined;
        $resta = 0;
        $resta.onclick = undefined; 
        $sustraccion = 0;
        $sustraccion.onclick = undefined;
    }
}



function reset() {
    $suma = document.getElementById("suma");
    $resta = document.getElementById("resta");
    $sustraccion = document.getElementById("sustraccion");
    $division = document.getElementById("division");
}

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
let $suma = document.getElementById("suma");
let $resta = document.getElementById("resta");
let $sustraccion = document.getElementById("sustraccion");
let $division = document.getElementById("division");

debugger
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
$suma.addEventListener('click', ()=>{
    $suma.style.backgroundColor="#5563E6";
    $suma.style.color="white";
    $suma.style.transition = "0.1s all ease-in";
    Null($suma); 
})
$resta.addEventListener('click', ()=>{
    $resta.style.backgroundColor="#5563E6";
    $resta.style.color="white";
    $resta.style.transition = "0.1s all ease-in";
    Null($resta); 
})
$sustraccion.addEventListener('click', ()=>{
    $sustraccion.style.backgroundColor="#5563E6";
    $sustraccion.style.color="white";
    $sustraccion.style.transition = "0.1s all ease-in";
    Null($sustraccion);
})
$division.addEventListener('click', ()=>{
    $division.style.backgroundColor="#5563E6";
    $division.style.color="white";
    $division.style.transition = "0.1s all ease-in";
    Null($division); 
})

//funciones de operaciones aritmeticas

$suma.onclick = () => {
    if ($suma === 0) {
    }else{
        signo = '+';
        numberOne = opc;
        opc = '';
        $consola.innerHTML = opc;
    }
}

function porcentaje(){
    signo = '%';
    numberOne = opc;
    opc = '';
    $consola.innerHTML = opc;
}

$resta.onclick = ()=>{
    if ($resta === 0) {
    }else{
        signo = '-';
        numberOne = opc;
        opc = '';
        $consola.innerHTML = opc;
    }
   
}

$sustraccion.onclick =  ()=>{
    if ($sustraccion === 0) {
    }else{
        signo = '*';
        numberOne = opc;
        opc = '';
        $consola.innerHTML = opc;
    }
    
}
$division.onclick = ()=>{
    if ($division === 0) {
    }else{
        signo = '/';
        numberOne = opc;
        opc = '';
        $consola.innerHTML = opc
    }
    ;
}

//funciones de la calculadora
function borrar(){
    $consola.innerHTML = ' ';
    opc = '';
    resetColors();
}
function eliminar() {
    opc = opc.substring(0, opc.length-1);
    $consola.innerHTML = opc;
}
function igual() {
    let result = 0;
    reset();

    //verificacion de numeros decimales
    if (isfloat(numberOne) || isfloat(opc)) {
        numberTwo = parseFloat(opc);
        numberOne = parseFloat(numberOne);
        
        numberOne = Math.round(numberOne * 100)/100;
        numberTwo = Math.round(numberTwo * 100)/100;

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
    resetColors();
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

function resetColors() {
    $suma.style.backgroundColor="#D5D6E9";
    $suma.style.color="#111C81";
    $resta.style.backgroundColor="#D5D6E9";
    $resta.style.color="#111C81";
    $sustraccion.style.backgroundColor="#D5D6E9";
    $sustraccion.style.color="#111C81";
    $division.style.backgroundColor="#D5D6E9";
    $division.style.color="#111C81";
}
