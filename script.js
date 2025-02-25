/*Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.*/
/*let precio = prompt("Introduce el precio de la compra:");
let descuento = precio * 0.25;
let precioFinal = precio - descuento;
alert("El precio final con descuento es: " + precioFinal);*/

/*Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/ 
/*let capital = 50000;
let interes = capital * 0.02;
let capitalFinal = capital + interes;
alert("El capital final después de un mes es: " + capitalFinal);*/

/*Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.*/
/*let parcial1 = parseFloat(prompt("Introduce la calificación del primer parcial:"));
let parcial2 = parseFloat(prompt("Introduce la calificación del segundo parcial:"));
let parcial3 = parseFloat(prompt("Introduce la calificación del tercer parcial:"));
let examenFinal = parseFloat(prompt("Introduce la calificación del examen final:"));
let trabajoFinal = parseFloat(prompt("Introduce la calificación del trabajo final:"));
let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
let calificacionFinal = (promedioParciales * 0.55) + (examenFinal * 0.30) + (trabajoFinal * 0.15);
alert("La calificación final en Algoritmos es: " + calificacionFinal);*/

/*El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%. */
/*let precioCompra = parseFloat(prompt("Introduce el precio de compra del artículo:"));
let ganancia = precioCompra * 0.30;
let precioVenta = precioCompra + ganancia;
alert("El precio de venta para obtener una ganancia del 30% es: " + precioVenta);*/


/*Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/
/*let kilometrosRecorridos = parseFloat(prompt("Introduce los kilómetros recorridos:"));
let minutos = parseFloat(prompt("Introduce los minutos de la carrera:"));
let costoKilometros = kilometrosRecorridos * 15000;
let costoMinutos = minutos * 2000;
let montoTotal = costoKilometros + costoMinutos;
alert("El monto total a pagar por la carrera es: " + montoTotal);*/

/*Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/
/*let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let numero3 = parseFloat(prompt("Introduce el tercer número:"));
let cuadrado1 = numero1 * numero1;
let cuadrado2 = numero2 * numero2;
let cuadrado3 = numero3 * numero3;
alert("El cuadrado del primer número es: " + cuadrado1);
alert("El cuadrado del segundo número es: " + cuadrado2);
alert("El cuadrado del tercer número es: " + cuadrado3);

/* En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área Porcentaje del presupuesto
Ginecología 40%
Traumatología 30%
Pediatría 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

/*let presupuestoAnual = parseFloat(prompt("Introduce el presupuesto anual del hospital:"));
let ginecologia = presupuestoAnual * 0.40;
let traumatologia = presupuestoAnual * 0.30;
let pediatria = presupuestoAnual * 0.30;
alert("El presupuesto para Ginecología es: " + ginecologia);
alert("El presupuesto para Traumatología es: " + traumatologia);
alert("El presupuesto para Pediatría es: " + pediatria);*/

/*Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

/*let inversion1 = parseFloat(prompt("Introduce la inversión de la primera persona:"));
let inversion2 = parseFloat(prompt("Introduce la inversión de la segunda persona:"));
let inversion3 = parseFloat(prompt("Introduce la inversión de la tercera persona:"));
let totalInversion = inversion1 + inversion2 + inversion3;
let porcentaje1 = (inversion1 / totalInversion) * 100;
let porcentaje2 = (inversion2 / totalInversion) * 100;
let porcentaje3 = (inversion3 / totalInversion) * 100;
alert("El porcentaje de inversión de la primera persona es: " + porcentaje1 + "%");
alert("El porcentaje de inversión de la segunda persona es: " + porcentaje2 + "%");
alert("El porcentaje de inversión de la tercera persona es: " + porcentaje3 + "%");*/

/*Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división.*/

/*let num1 = parseFloat(prompt("Introduce el primer numero:"));
let num2 = parseFloat(prompt("Introduce el segundo numero:"));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;
alert("Suma: " + sum);
alert("Resta: " + difference);
alert("Multiplicación: " + product);
alert("División: " + quotient);*/

//estructuras de control

//ejemplo 1- Declarar dos variables una que sea el nombre y otra que sea la edad y mostrar si us mayor de edad o no

/*let nombre = prompt("Introduce tu nombre:");
let edad = parseInt(prompt("Introduce tu edad"));
if (edad >= 18){
    alert("Hola " + nombre + " eres mayor de edad");
}else{
    alert("Hola " + nombre + " eres menor de edad");
}*/

/*let nombre = prompt("Introduce tu nombre:");
let edad = parseInt(prompt("Introduce tu edad"));
if (edad >= 1 && edad <= 18){
    alert("Hola " + nombre + " eres Joven");}
    else if(edad >= 19 && edad <= 40){
        alert("Hola " + nombre + " eres Adulto");
    }else if (edad >= 41 && edad <= 60){
        alert("Hola " + nombre + " eres madura");
    }
    else{
        alert("Hola " + nombre + " eres anciano");
    }*/
   /*let cuentaatras = parseInt(prompt("intoduce el numero para contar atras"))
   while (cuentaatras > 0){
    document.write(cuentaatras, "<br>")
cuentaatras = cuentaatras -1}*/

    

/*let respuesta

do {
  respuesta = confirm("¿Te gusta el sena???????");
} while (respuesta)*/
 
/*escribir 5 edades y definir si son mayores de edad o no*/
/*
let cotador = 0;
let respuesta;
do{

    let edad1 = parseInt(prompt("Introduce la edad de la primera persona:"));
    if (edad1 >= 18)
    alert("eres mayor de edad")
    else{
        alert("eres menor de edad")
    }
    let edad2 = parseInt(prompt("Introduce la edad de la segunda persona:"));
    if (edad2 >= 18)
        alert("eres mayor de edad")
    else{
        alert("eres menor de edad")
    }
    let edad3 = parseInt(prompt("Introduce la edad de la tercera persona:"));
    if (edad3 >= 18)
        alert("eres mayor de edad")
    else{
        alert("eres menor de edad")
    }
    let edad4 = parseInt(prompt("Introduce la edad de la cuarta persona:"));
    if (edad4 >= 18)
        alert("eres mayor de edad")
    else{
        alert("eres menor de edad")
    }
    let edad5 = parseInt(prompt("Introduce la edad de la quinta persona:"));
    if (edad5 >= 18)
        alert("eres mayor de edad")
    else{
        alert("eres menor de edad")
    }
}while (respuesta)*/


/*let numpersonas = 0;
do {
    let nombre = prompt("Introduce el nombre de la persona:");
    let edad = parseInt(prompt("Introduce la edad de la persona:"));
    if (edad >= 18){
        alert (nombre + " es mayor de edad.");
    }else {
        alert(nombre + " es menor de edad.");
    }
    numpersonas++;
}while (numpersonas < 5)*/

/*for (let i = 10; i >= 0; i--) {
    if (i === 0) {
      console.log('¡Despegue 🚀!')
    } else {
      console.log('Faltan ' + i + ' segundos')
    }
  }*/

 let numero = parseInt(prompt("Ingresa un numero"))
 for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
 }