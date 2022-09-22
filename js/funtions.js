function suma()
{
    var a = 0;
    var b = 0;
    var c = 0;
    a = parseInt (prompt("ingrese el primer valor"));
    b = parseInt (prompt("ingrese el segundo valor"));
    c = a + b;
    alert ("El resultado de la suma es"  + c);
    
}

function OpBasicas()
{
    var x;
    var y;
    var suma;
    var resta;
    var multi;
    var divi;
    x = parseInt (prompt ("Ingrese el primer valor"));
    y = parseInt (prompt ("Ingresar el segundo valor"));
    suma = x + y;
    resta = x - y;
    multi = x * y;
    divi = x / y;
    alert ("El resutado en suma es: " + suma);
    alert (" El resultado en resta es: " + resta);
    alert(" El resultado en multiplicacion es: " + multi);
    alert(" El resultado en division es: " + divi);
}

function nMayor()
{
    var n1;
    var n2;
    n1 = parseInt (prompt ("Ingrese el primer valor a ser valorado"));
    n2 = parseInt (prompt ("Ingrese el segundo valor a ser valorado"));

    if(n1 == n2){
        alert ("Los valores ingresados son iguales");
    }
    else if(n1 > n2)    {
        alert ("El numero mayor es: " +n1);
    }
    else {
        alert ("El numero mayor es: " +n2);   
}

}

function Mdetresnumeros()
{
    var n1;
    var n2;
    var n3;
    n1 = parseInt (prompt ("Ingrese el primer valor a ser comparado"));
    n2 = parseInt (prompt ("Ingrese el segundo valor a ser comparado"));
    n3 = parseInt (prompt ("Ingrese el tercer valor a ser comparado"));

    if(n1 < n2 && n1 < n3){
        alert ("el numero menor es" +n1);}
        if(n2 < n2 && n1 < n3){
            alert ("el numero menor es" +n2);}
                if(n3 < n2 && n1 < n3){
                    alert ("el numero menor es" +n3);}
    
    else {  
        alert ("los numeros son iguales: ");
}

}

function Cuadradodeunnumero(){

var n1;
var n2;
n1 = parseInt (prompt ("Ingrese el primer valor el cual va dar como resultado un numero al cuadrado"));
n2 = n1*n1;
alert("el valor de un numero ingresado al cuadrado es:" + n2);
}

function Areadeuntriangulo(){
var base = 0;
var altura = 0;
var area = 0;
base = parseInt(prompt("ingrese la base del traingulo"));
altura = parseInt(prompt("ingrese la base del traingulo"));
area = (base * altura)/2;
alert("El area del triangulo es:" + area);
}

function Centimetrosametros(){
    var metros = 0;
    var centimetros = 100;
    metros = parseFloat (prompt ("Ingrese el valor en metros para ser mostrado en centimetros"));
    centimetros = metros*centimetros/1
    alert ("El valor en centimetros es " + centimetros);
}

function Par_Impar(){
var N;
N = parseInt(prompt("por favor escriba un numero"));
if (N % 2==0) {
    alert("el numero"  + N +  "es un numero par");   
}
else{
    alert("el numero"  + N + "es un numero impar");     
}

}

function Capitalinvertido(){

var años = 0;
var meses = 12;
var interes = 1.7;
var capital = 0;
R1 = 0;
R2 = 0;
R3 = 0;
capital = parseInt(prompt("ingrese el capital el cual va a ser consultado"));
años = parseInt(prompt("ingrese el capital el cual va a ser consultado"));
R1 = (años * meses);
R2 =(capital*17)/100;
R3 =(R2 + capital) * R1;
alert ("las ganancias por meses serian" + R2 + "y el total de las ganancias mas el capital es:" + R3);
}

function Añodenacimiento(){
let edad_actual = parseInt(prompt("ingrese la edad actual"));
let año_actual = parseInt(prompt("ingrese el año actual"));
let resultado = año_actual-edad_actual;
alert("usted nacio en"  + resultado );
}

function Notasdeingles(){
var nota1;
var nota2;
var nota3;
var nota4;
var nota5;
var promedio;
var suma;

var nota1 =  parseInt(prompt("digite la nota 1"));
var nota2 =  parseInt(prompt("digite la nota 2"));
var nota3 =  parseInt(prompt("digite la nota 3"));
var nota4 =  parseInt(prompt("digite la nota 4"));
var nota5 =  parseInt(prompt("digite la nota 5"));
suma = nota1 + nota2 + nota3 + nota4 + nota5;
promedio = suma/5;
alert("el resutado es:"  + promedio );
if (promedio>3)
 { 
alert("el alumno aprobo con un promedio de: "  + promedio );    
}

else{
    alert("el alumno no aprobo por que su promedio fue: "  + promedio );    
}
}

function Descuentodefutas(){
    var NKilos = 1;
    var descuento1 = 90;
    var descuento2 = 85;
    var descuento3 = 80;
    var total = 0;
    NKilos = parseInt (prompt ("Ingresa el numero de kilos a comprar "));
    
    if(NKilos <= 2)
    {
        total = NKilos * 4500;
        alert ("El valor a cancelar es " + total);
    } 
    else if (NKilos <=5)
    {
        total = (NKilos * 4500)*descuento1/100;
        alert ("El valor a cancelar es " + total)
    }
    else if (NKilos <= 10)
    {
        total = (NKilos * 4500)*descuento2/100;
        alert ("El valor a cancelar es " + total);
    }
    else if (NKilos > 10)
    {
        total = (NKilos * 4500)*descuento3/100;
        alert ("El valor a cancelar es " + total);
    }
    else 
    {
        alert ("No a ingresado ningun valor");
    }

}