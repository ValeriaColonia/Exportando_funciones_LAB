//! EJERCICIO 1/TAREA 1

import {PI,IVA} from "./constantes.js"; 

//! EJERCICIO 1/TAREA 2

let AreaCirculo = (PI* 5**2).toFixed(2)
console.log("el area del circulo es: ",AreaCirculo); 

let precioConIVA = (100 * IVA)+ 100; 
console.log("El precio con IVA de 19% es: ",precioConIVA);

//! EJERCICIO 1/TAREA 3

import { DIAS_SEMANA } from "./constantes.js";
console.log("El tercer día de la semana es el ", DIAS_SEMANA[2]); 

//! EJERCICIO 2/TAREA 1

import {sumar, restar, multiplicar, areaCirculo} from "./operaciones-matematicas.js"

//! EJERCICIO 2/TAREA 2 

console.log("Suma = ", sumar (4,6)); 
console.log("resta = ", restar (15,5)); 
console.log(" Multiplicación = ", multiplicar (5,5));
console.log("Area del circulo = ", areaCirculo(10));

//! EJERCICIO 3/TAREA 2


import {calcularTotal, calcularImpuesto, calcularDescuento} from "./operaciones-matematicas.js";

let precio = 350; 
let cantidad = 3; 
let total = calcularTotal(precio,cantidad)
console.log ("Su total es de : ", total);
console.log("su total mas impuesto es de: ", calcularImpuesto(total)); 
console.log("Su total con el descuento es de: ", calcularDescuento(total)); 

//! EJERCICIO 4/ TAREA 3

