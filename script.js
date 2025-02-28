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

 /*let numero = parseInt(prompt("Ingresa un numero"))
 for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    document.write(numero + " x " + i + " = " + resultado + "<br>");
 }*/
/*imprime por consola u mensage si el usuario y contraseña coinciden con unos establesidos*/
/*let usuario="jupazago"
let contraseña="1234"
let usuario1= prompt("Escribe tu usuario")
let contraseña1= prompt("Escribe tu contraseña")

if(usuario==usuario1 && contraseña==contraseña1){
        alert ( "Bienvenido")
    }
else{
    alert ("El usuario o la contraseña son incorrectos")
}*/
/*diseñar un programa que determine que dia de la semana es hoy, utilizando la funcion promt*/

/*const dia= new Date().getDay()

switch (dia) {
  case 1:
    console.log("¡Hoy es lunes! 😢")
    break
    case 2:
    console.log("¡Hoy es martes! 🥱")
    break
    case 3:
    console.log("¡Hoy es miercoles! 😔")
    break
    case 4:
    console.log("¡Hoy es jueves! 😴")
    break
    case 5:
    console.log("¡Hoy es viernes! 🫠")
    break
    case 6:
    console.log("¡Hoy es sabado! 🤠")
    break
    case 0:
    console.log("¡Hoy es domingo! 🫣")
    break
    default:
        console.log("Se acerca el fin de! 🚀")
        break
    }*/
       /* let nombre = prompt("Introduce tu nombre:");
        let edad = parseInt(prompt("Introduce tu edad"));   
        switch(true) {
          case (edad >= 1 && edad <= 18):
            console.log("Hola " + nombre + " eres Joven");
            break;
          case (edad >= 19 && edad <= 40):
            console.log("Hola " + nombre + " eres Adulto");
            break;
          case (edad >= 41 && edad <= 60):
            console.log("Hola " + nombre + " eres madura");
            break;
          default:
            console.log("Hola " + nombre + " eres anciano");
        }*/
            /*Ejercicio 2 Dada las 3 calificaciones que el estudiante obtuvo en un curso
            a) Determinar su promedio
            b) Indicar si el estudiante aprobó o no aprobó el curso.
            Las notas deben ser de 1 a 10 y aprueba con un promedio mayor de 6*/
            // Paso 1: Solicitar las calificaciones
/*let nota1 = parseFloat(prompt("Ingresa la primera calificación (1-10):"));
let nota2 = parseFloat(prompt("Ingresa la segunda calificación (1-10):"));
let nota3 = parseFloat(prompt("Ingresa la tercera calificación (1-10):"));

// Paso 2: Calcular el promedio
let promedio = (nota1 + nota2 + nota3) / 3;

// Paso 3: Determinar si aprobó o no
let resultado = (promedio > 6) ? "Aprobó" : "No aprobó";

// Paso 4: Mostrar los resultados
alert("Promedio: " + promedio.toFixed(2));
alert("Resultado: " + resultado);*/

/* Ejemplo 4 Leer dos números y los imprima en forma ascendente.*/
    // Paso 1: Leer los dos números
/*let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Paso 2: Comparar los dos números y mostrarlos en orden ascendente
if (num1 > num2) {
    alert("Los números en orden ascendente son: " + num2 + ", " + num1);
} else {
    alert("Los números en orden ascendente son: " + num1 + ", " + num2);
}*/
/*Ejercicio 6Dado un numero entre 1 y 7 escriba su correspondiente día de la semana
así:
DIA1 = LUNES
DIA2 = MARTES
DIA3 = MIECOLES
DIA4 = JUEVES
DIA5 = VIERNES
DIA6 = SABADO
DIA7 = DOMINGO
SI se escribe otro número diferentes debe salir el mensaje: ESCRIBIO UN
NUMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7 */
// Paso 1: Leer el número
/*let dia = parseInt(prompt("Ingresa un número entre 1 y 7:"));

// Paso 2: Determinar el día correspondiente
switch(dia) {
    case 1:
        alert("LUNES");
        break;
    case 2:
        alert("MARTES");
        break;
    case 3:
        alert("MIÉRCOLES");
        break;
    case 4:
        alert("JUEVES");
        break;
    case 5:
        alert("VIERNES");
        break;
    case 6:
        alert("SÁBADO");
        break;
    case 7:
        alert("DOMINGO");
        break;
    default:
        alert("ESCRIBIÓ UN NÚMERO FUERA DEL RANGO. ESCRIBA UN NÚMERO ENTRE 1 Y 7");
        break;
}*/
            
/* Ejercicio 8 Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.
manera:
a) Si trabaja 40 horas o menos se le paga $16000 por hora
b) Si trabaja más de 40 horas se le paga $20000 por hora*/
// Paso 1: Leer la cantidad de horas trabajadas
/*let horasTrabajadas = parseInt(prompt("Ingresa el número de horas trabajadas en la semana:"));

// Paso 2: Calcular el salario
let salario;
if (horasTrabajadas <= 40) {
    salario = horasTrabajadas * 16000; // Pago por hora si trabaja 40 horas o menos
} else {
    salario = (40 * 16000) + ((horasTrabajadas - 40) * 20000); // Pago por hora si trabaja más de 40 horas
}

// Paso 3: Mostrar el salario calculado
alert("El salario semanal del obrero es: $" + salario);*/
/* Ejercicio 10 Hacer un programa que calcule el total a pagar por la compra de camisas. Si
se compran tres camisas o mas se aplica un descuento del 20% sobre el total
de la compra y si son menos de tres camisas un descuento del 10%.*/
// Paso 1: Leer el precio de la camisa y la cantidad de camisas
/*let precioCamisa = parseFloat(prompt("Ingresa el precio de una camisa:"));
let cantidadCamisas = parseInt(prompt("Ingresa la cantidad de camisas que deseas comprar:"));

// Paso 2: Calcular el total de la compra sin descuento
let totalCompra = precioCamisa * cantidadCamisas;

// Paso 3: Aplicar el descuento según la cantidad de camisas
let descuento;
if (cantidadCamisas >= 3) {
    descuento = totalCompra * 0.20; // Descuento del 20% si se compran 3 o más camisas
} else {
    descuento = totalCompra * 0.10; // Descuento del 10% si se compran menos de 3 camisas
}

// Paso 4: Calcular el total a pagar después del descuento
let totalPagar = totalCompra - descuento;

// Paso 5: Mostrar el total a pagar
alert("El total a pagar por la compra de camisas es: $" + totalPagar.toFixed(2));
*/
/*Ejercicio 12 Realizar una calculadora con las operaciones básicas suma, división,
multiplicación y división. */
// Paso 1: Mostrar las opciones de operaciones al usuario
/*let operacion = prompt("Elige la operación que deseas realizar:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir");

// Paso 2: Leer los números para realizar la operación
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));

// Paso 3: Realizar la operación seleccionada
let resultado;

switch (operacion) {
    case "1":
        resultado = num1 + num2;
        alert("El resultado de la suma es: " + resultado);
        break;
    case "2":
        resultado = num1 - num2;
        alert("El resultado de la resta es: " + resultado);
        break;
    case "3":
        resultado = num1 * num2;
        alert("El resultado de la multiplicación es: " + resultado);
        break;
    case "4":
        // Verificar que no se divida entre 0
        if (num2 === 0) {
            alert("Error: No se puede dividir entre cero.");
        } else {
            resultado = num1 / num2;
            alert("El resultado de la división es: " + resultado);
        }
        break;
    default:
        alert("Opción no válida. Por favor elige un número entre 1 y 4.");
        break;
}*/
/*Ejercicio 14 Crea un programa que calcule el índice de masa corporal (IMC) de una
persona y muestre un mensaje indicando si la persona está bajo peso, peso
normal, sobrepeso u obesidad.*/
// Paso 1: Leer el peso y la altura de la persona
/*let peso = parseFloat(prompt("Ingresa tu peso en kilogramos (kg):"));
let altura = parseFloat(prompt("Ingresa tu altura en metros (m):"));

// Paso 2: Calcular el Índice de Masa Corporal (IMC)
let imc = peso / (altura * altura);

// Paso 3: Determinar la categoría del IMC
let categoria;
if (imc < 18.5) {
    categoria = "Bajo peso";
} else if (imc >= 18.5 && imc < 24.9) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc < 29.9) {
    categoria = "Sobrepeso";
} else {
    categoria = "Obesidad";
}

// Paso 4: Mostrar el resultado
alert("Tu IMC es: " + imc.toFixed(2) + "\nCategoría: " + categoria);*/

/* Ejercicio 16 Desarrolla un programa que solicite la nota final de la materia de algoritmos
y generar el criterio de la nota, de acuerdo a la siguiente tabla.*/
// Paso 1: Solicitar la nota final de la materia de algoritmos
/*let nota = parseFloat(prompt("Ingresa la nota final de la materia de algoritmos:"));

// Paso 2: Determinar el desempeño según la escala institucional
let criterio;

if (nota >= 4.5 && nota <= 5.0) {
    criterio = "Desempeño Superior";
} else if (nota >= 3.9 && nota < 4.5) {
    criterio = "Desempeño Alto";
} else if (nota >= 3.4 && nota < 3.9) {
    criterio = "Desempeño Básico";
} else if (nota >= 1.0 && nota < 3.4) {
    criterio = "Desempeño Bajo";
} else {
    criterio = "Nota fuera de rango. Ingresa una nota entre 1.0 y 5.0.";
}

// Paso 3: Mostrar el resultado
alert("Criterio según la nota: " + criterio);*/
/*Ejercicio 18 Escribe un programa que imprima "Es un número menor que 10" si el número
ingresado es menor que 10, "Es un número entre 10 y 20" si el número
ingresado está entre 10 y 20, y "Es un número mayor que 20" si el número
ingresado es mayor que 20.*/
// Paso 1: Leer el número ingresado por el usuario
/*let numero = parseInt(prompt("Ingresa un número:"));

// Paso 2: Evaluar el rango del número
if (numero < 10) {
    alert("Es un número menor que 10");
} else if (numero >= 10 && numero <= 20) {
    alert("Es un número entre 10 y 20");
} else {
    alert("Es un número mayor que 20");
}*/
/*Ejercicio 20 Escribe un programa que solicite al usuario su género y su edad. Si el usuario
es de género masculino y tiene más de 18 años, muestra un mensaje que
indique que es elegible para el servicio militar; en caso contrario, muestra un
mensaje que diga que no es elegible.*/
// Paso 1: Solicitar el género y la edad del usuario
let genero = prompt("Ingresa tu género (masculino/femenino):").toLowerCase();
let edad = parseInt(prompt("Ingresa tu edad:"));

// Paso 2: Verificar si el usuario es de género masculino y tiene más de 18 años
if (genero === "masculino" && edad > 18) {
    alert("Eres elegible para el servicio militar.");
} else {
    alert("No eres elegible para el servicio militar.");
}



