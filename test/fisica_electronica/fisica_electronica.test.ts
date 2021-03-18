import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
    resistenciasParalela 
} from "../../src/fisica_electronica/index.ts";

interface datoProbar {
    resistencias:number[]
    resultado:number
}
interface resistenciaIndice {
    [indice: string]:number
}

let resistencias:resistenciaIndice= {
    "R1":600,
    "R2":1000,
    "R3":9000,
    "R4":25000,
    "R5":200,
    "R6":3000,
    "R7":15000,
    "R8":100,
    "R9":50
}
resistencias["R10"] = resistenciasParalela([resistencias["R6"],resistencias["R7"]])
resistencias["R11"] = resistenciasParalela([resistencias["R1"],resistencias["R2"]])
resistencias["R12"] = resistenciasParalela([resistencias["R4"],resistencias["R9"]])
resistencias["R13"] = resistenciasParalela([resistencias["R11"]+resistencias["R3"],resistencias["R12"]+resistencias["R5"],])


let probar:datoProbar[] =[
    // r10
    {
    resistencias:[resistencias.R10],
    resultado:2500},
    // r11
    {
    resistencias:[resistencias.R11],
    resultado:375
    },
    // r12
    {
    resistencias:[resistencias.R12],
    resultado:49.9001996007984
    },
    // r13
    {
    resistencias:[resistencias.R11+resistencias.R3,resistencias.R12+resistencias.R5 ],
    resultado:243.411809231503
    },
    // r14
    {
    resistencias:[resistencias.R10+resistencias.R8+resistencias.R13],
    resultado:2843.411809231503
    }
] 
probar.forEach((dato,index)=>{
    Deno.test(`circuito paralelo ${index}`, () => {
        assertEquals(resistenciasParalela(dato.resistencias),dato.resultado)
    });
})
