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

import {ROLES} from "./usuariosConstantes.js"
import {crearUsuario} from "./usuarios.js"

const usuario1 = crearUsuario("Pedro",ROLES.ADMIN); 
console.log(usuario1);
const usuario2 = crearUsuario("Carlos",ROLES.CLIENTE);
console.log(usuario2); 

//! EJERCICIO 5/ TAREA 2

import { aplicarDescuentoPorRol } from "./operaciones-matematicas.js";
import { DESCUENTO } from "./constantes.js";

// admin

let prec = 25;
let cant = 4;
let tot = calcularTotal(prec,cant);
console.log("su total es de: ",tot);
let totim= calcularImpuesto(tot);
console.log ("su total mas impuesto es de: ",tot) 
console.log("Su total con descuento de admin es: ", aplicarDescuentoPorRol(totim,usuario1));

// cliente 

let prec1 = 3
let cant1 = 50 
let tot2 = calcularTotal(prec1,cant1);
console.log("su total es de: ",tot2);
let totim2= calcularImpuesto(tot);
console.log ("su total mas impuesto es de: ",tot2) 
console.log("Su total con descuento de admin es: ", aplicarDescuentoPorRol(totim2,usuario2));



