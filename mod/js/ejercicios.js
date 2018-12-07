/*1. Una persona deposita hoy al Banco cierta cantidad de dinero, donde le reconocen un interés del 2%
mensual, capitalizado mensualmente. ¿Cuál será el saldo al cabo de 5 años?
Formula a utilizar: Valor Futuro = Valor Presente * (1+intereses)^meses
Para solucionar el Ejercicio, se requiere desarrollar un script que permita conocer a una persona
¿Cuál será el saldo al cabo de 5 años?, si al depositar hoy cierta cantidad de dinero.
Como resultado se debe imprimir en el documento HTML:
Valor consignado: $XXXXX
Valor futuro en 5 años: $XXXXXXX */



//opcion 1
var Deposit=prompt("Introduzca el deposito");
var years=prompt("Introduzca el numero de años");
var n=years*12;
var i=0.02;
var factor = Math.pow(i,n);
var share= Deposit*factor;
document.write("Consignacion inicial: "+Deposit+"<br>");
document.write("Valor futuro en "+years+" es: "+share);


//opcion 2
var Deposit=prompt("Introduzca el deposito");
var interest=0.02;
var month=60;
var metodo=Deposit*interest;
var metodo2=metodo*month;
var total=parseInt(Deposit)+parseInt(metodo2);
document.write("El deposito inicial es: "+Deposit+"<br>");
document.write("El valor que tendra a 5 años sera: "+total);






/*2.Una frutería ofrece las manzanas a $4.200 el kilo, con un descuento de acuerdo a la siguiente tabla:
Desarrollar un script que permita a la frutería y al cliente (Pedir la cantidad de quilos a comprar)
conocer cuanto pagará un cliente que compre manzanas.
Mostrar en el documento HMTL los resultados así:
La compra de N kilos tiene un valor de $, pero tiene un descuento por valor de $, por lo tanto el
valor a pagar es: $.
EJEMPLO: Si una persona compra 5 kilos de manzanas, el resultado sería: La compra de 5 kilos tiene
un valor de $21000, pero tiene un descuento por valor de $2100, por lo tanto el valor a pagar es:
$18900. */


var numberk=parseInt(prompt("Ingrese el numero de kilos"+"numero de kilos: 0.2, 2,01-5, 5,01-10 y 10.01 en adelante"));
var valor=4200;
var d1=0;
var d2=0.10;
var d3=0.15;
var d4=0.20;
var descuento;
if (numberk<=2) {
    precio=numberk*valor;
    descuento=precio*d1;
    var total=precio-descuento;
}else{
    precio=numberk*valor;
}
if (numberk>=2.01) {
    precio=numberk*valor;
    descuento=precio*d2;
    var total=precio-descuento;
}else{
    precio=numberk*valor;
}
if (numberk>=5.01) {
    precio=numberk*valor;
    descuento=precio*d3;
    var total=precio-descuento;
}else if(numberk>10.01){
    precio=numberk*valor;
    descuento=precio*d4;
    var total= precio-descuento;
}
var totalDescuento= descuento;
document.write("la compra de "+numberk+" kilos tiene un valor de "+precio+", pero tiene un descuento por valor de "+descuento+
                ", por lo ranto el valor a pagar es: "+total)







/*3. Dada la siguiente función:
Y= x^2 – 2x
Se requiere desarrollar un algoritmo que imprima en pantalla, para valores de x desde 1 a 10, lo
siguiente:
a. La suma de todos los valores de Y.
b. Valores de Y múltiplos de 3.
c. Suma de los valores de Y múltiplos de 3.
d. Valores de Y cuyo último digito sea 5.
e. Suma de los valores de Y cuyo último digito es 5.
Resultados esperados:
a. Suma de todos los valores de Y
275
b. Valores de Y múltiplos de 3:3
• 15
• 24
c. Suma de los valores de Y múltiplos de 3
153
d. Valores de Y cuyo último digito es 5
• 15
• 35
e. Suma de los valores de Y cuyo último digito es múltiplo de 5
50 */


var x;
var y;
var suma=0;
var Tercerasuma=0;
var ultimasifra;
for (x=1; x<=10; x++) {
Y=Math.pow(x,2)-2*x;
suma=suma+y;
if((y%3)==0){
    document.write(y+" es un multiplo de 3");
    Tercerasuma=Tercerasuma+y;  
}
    
}
for (x=1; x<=10; x++) {
    Y=Math.pow(x,2)-2*x;
    ultimasifra=y%10;
    if()

    
}

document.write("<h1>"+"La suma de todos los valores de Y es:"+"<br>"+suma);



/*4. Desarrollar un script que lea un número N entero positivo de cualquier número de dígitos, calcule la
suma de sus dígitos y que imprima en pantalla el número leído y la suma de sus dígitos.
Se requiere que en el desarrollo utilice la Estructura Cíclica Mientras.
Ejemplo: N= 3567 SUMA= 21 */

var number=0;
var sum=0;
var num1,num2,num3,num4;

number=prompt("Ingrese los numeros que quiere sumar.");

num1=number/10;
num2= number%10;
sum= sum=num2;
num1= num1-(num2*0.1);

while(num1>0){
    num3=num1/10;
    num4=num1%10;
    sum= sum+num4;
    num1=num3-(num4*0.1);

}
document.write("El numero que ingreso es: "+number+"el cual tiene un total de: "+sum)


/*5. Desarrollar un script que calcule el salario neto que debe recibir un vendedor de un almacén. Se
debe tener en cuenta si tiene derecho o no al auxilio de transporte.
Para el desarrollo del ejercicio tenga en cuenta las siguientes formulas:
Sueldo devengado = salario básico * días laborados / 30.
Días laborados = debe ser entre 1 y 30.
Auxilio de Transporte: Lo reciben los empleados cuyo salario básico sea menor o igual a 2 salarios
mínimos legales vigentes.
Salario Mínimo Legal Vigente(2018): 781.242
Auxilio de Transporte = 88.211 * días laborados / 30 (año 2018 en Colombia).
Comisión de Ventas: En la empresa se tiene estipulado dar una comisión de ventas del 2% sobre las
ventas del mes de cada vendedor.
Total devengado = sueldo devengado + comisión de ventas.
Total deducciones = descuentos por prestamos. 
Salario Neto = Total devengado – Total deducciones
Como resultado el script debe imprimir en pantalla lo siguiente:
Cedula empleado: XXXXXX
Nombre Empleado: XXXXXXX
Salario Básico: XXXXXX
Auxilio de Transporte: XXXXXX
Comisión de Ventas: XXXXXX
Préstamos: XXXXXX
Salario Neto a Recibir: XXXXX */




/*6. Desarrollar un script que imprima los primeros 20 términos de la siguiente serie:
1, 3, 6, 10, 15, 21, 28,…….. */


var sum=0;
var counter=0;
var sequence=0;
while(counter<=20){
    document.write(sequence+",");
    counter=counter+1;
    sequence=sequence+counter;
}



/*7. Desarrollar un script que permita calcular los siguientes datos de una fiesta:
¿Cuántas personas asistieron a la fiesta?
¿Cuántos hombres y cuantas mujeres?
Promedio de edades por sexo.
La edad de la persona más joven que asistió.
Consideraciones:
• No se permiten menores de edad a la fiesta.
• Ingresar datos hasta que se ingrese una edad igual a cero
*/



/*8. Desarrollar un script que imprima el costo de una llamada telefónica, capturando la duración de la
llamada en minutos y conociendo lo siguiente:
• Toda llamada que dure tres minutos o menos tiene un costo de $200.
• Cada minuto adicional cuesta $30. */


var minutesconsumed;
var valueperminute=200;
var extra=30;

minutesconsumed=prompt("Ingrese los minutos");

if(minutesconsumed<=3){
    valueperminute=minutesconsumed*valueperminute;
}
if(minutesconsumed>3){
    valueperminute=valueperminute+extra;
    valueperminute=minutesconsumed*valueperminute;
}


alert("El valor de la llamada es: "+valueperminute
+" la cantidad de minutos gastados es: "+minutesconsumed);



/*9. Un grupo de 10 estudiantes presentan un examen de Física. Hacer un algoritmo que lea por cada
estudiante la calificación obtenida. Al finalizar calcule e imprima:
• La cantidad de estudiantes que obtuvieron una calificación menor a 50.
• La cantidad de estudiantes que obtuvieron una calificación de 50 o más pero menor que 70.
• La cantidad de estudiantes que obtuvieron una calificación de 70 o más pero menor que 80.
• La cantidad de estudiantes que obtuvieron una calificación de 80 o más.
• La calificación obtenida en el examen de física debe ser entre 1 y 100. */

var counter;
var acomulator=0;
var firstacomulator=0;
var secondacomulator=0;
var thirdacomulator=0;
var score;

while (counter<=10) {
    score=prompt("Estas son las calificaciones"+counter);

    counter=counter+1;
    if (score>0 && (score<=100)) {
        if (score<50) {
            acomulator=acomulator+1;
        } if (score>=50 && (score<70)) {
            firstacomulator=firstacomulator+1;
        } if (score>=70 && (score<80)) {
            secondacomulator=secondacomulator+1;
        }if (score>80) {
            thirdacomulator=thirdacomulator+1;
        }
    } else{
        document.write("La califiacion debe estar entre 1 y 100.")
    }
}

document.write("Los estudiantes que obtuvieron menos de 50 son: "+acomulator+
" La cantidad de estudiantes que obtuvieron una calificación de 50 o más pero menor que 70 son: "+firstacomulator+
" La cantidad de estudiantes que obtuvieron una calificación de 70 o más pero menor que 80 es: "+secondacomulator+
" La cantidad de estudiantes que obtuvieron una calificación de 80 o más son: "+thirdacomulator);