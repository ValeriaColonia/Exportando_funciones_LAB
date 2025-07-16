//! EJERCICIO 2

import {PI} from "./constantes.js"

export function sumar(a,b){
    return a + b
}

export function restar(a,b){
    return a - b
}

export function multiplicar(a,b){
    return a * b
}

export function areaCirculo (radio){
    return (PI * radio ** 2).toFixed(2) 
}

//! EJERCICIO 3/ TAREA 1

import {IVA,DESCUENTO} from "./constantes.js"

export function calcularTotal (precio,cantidad){
    return precio * cantidad 
}

export function calcularImpuesto (total){
    return (total * IVA) + total
}

export function calcularDescuento(total){
   return total - (total * DESCUENTO)
}