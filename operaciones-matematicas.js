import {PI} from "./constantes.js"
import {IVA,DESCUENTO} from "./constantes.js"
import { ROLES } from "./usuariosConstantes.js"

//! EJERCICIO 2

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

export function calcularTotal (precio,cantidad){
    return precio * cantidad 
}

export function calcularImpuesto (total){
    return (total * IVA) + total
}

export function calcularDescuento(total){
   return total - (total * DESCUENTO)
}

//! EJERCICIO 5/ TAREA 1

export function aplicarDescuentoPorRol(total,usuario){
    if (usuario.rol == ROLES.ADMIN){
        return total - (total * 0.20)  
    } else {
        return total - (total * DESCUENTO)
    }
}