import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {metodoGaust,ordenarMatriz,metodoGaustJordan ,encontrarCero2x2,convertirEnCeroIndiceSeleccionado,intercambiarFilasPorColumnas } from "../src/index.ts";

interface datosProbarModificacionMatrix {
    matrix:number[][]//|[[number,number,number,number],[number,number,number,number],[number,number,number,number]]
    resultado:number[][];
}
let probarMetodoGaust:datosProbarModificacionMatrix[]=[
    

// {
//     matrix:[[18, 6,  42],[-72,  24,  18]],
//     resultado: []
// } ,
    {
        matrix:[[4,2,-1,-5],[2,-1,0,4],[1,2,3,12]],
        resultado: [ [ 1, 2, 3, 12 ], [ -0, 1, 6/5, 4 ], [ -0, -0, 1, 4.999999999999999] ]
    } ,
    {
        matrix:[[2,1,-3],[1,1,2],[-1,-2,0]],
        resultado:[ [ 1, 2, -0 ], [ -0, 1, -2 ], [ -0, -0, 1 ] ]
    } ,
    {
        matrix:[[2,3,4],[4,2,2],[6,13,0]],
        resultado:[ [ 1, 1.5, 2 ], [ -0, 1, 1.5 ], [ -0, -0, 1 ] ]
    },
    {
        matrix:[[2,7,3,-7],[1,3,4,3],[1,4,3,-2]],
        resultado:[ [ 1, 4, 3, -2 ], [ -0, 1, 3, 3 ], [ 0, 0, 1, 2 ] ]
    } 
]
// probarMetodoGaust.forEach((data:datosProbarModificacionMatrix,index)=>{
//     Deno.test(`Metodo de Gaust ${index}`, () => {
//         assertEquals(metodoGaust(data.matrix),data.resultado)
//     });
// })

probarMetodoGaust=[
    {
        matrix:[
        [ 8, - 4, 4, -8],
        [12, - 4, 8, 16],
        [4,  12, - 4, -24]],
        resultado:[
            [ 1, 0, 0, -4.800000000000001 ],
            [ 0, 1, 0, 3.1999999999999993 ],
            [ -0, -0, 1, 10.8 ]
        ]
        
    },
    // {
    //     matrix:[[4,2,-1,-5],[2,-1,0,4],[1,2,3,12]],
    //     resultado:[[ 1, 0, 0, 1 ],[ 0, 1, 0, -1.9999999999999991 ],[ -0, -0, 1, 4.999999999999999 ]]
    // },
    // {
    //     matrix:[[2,7,3,-7],[1,3,4,3],[1,4,3,-2]],
    //     resultado:[[1,0,0,4],[-0,1,0,-3],[0,0,1,2]]
    // } ,
    // {
    //     matrix:[[1,-1,3,13],[1,1,1,11],[2,2,-1,7]],
    //     resultado:[[1,0,0,2],[-0,1,0,4],[0,0,1,5]]
    // } 
]
probarMetodoGaust.forEach((data:datosProbarModificacionMatrix,index)=>{
    Deno.test(`Metodo de Gaust  Jordan${index}`, () => {
        assertEquals(metodoGaustJordan(data.matrix),data.resultado)
    });
})
let probarIntercambiar:datosProbarModificacionMatrix[]= [
    {
        matrix:[[4,-2,8,3],[4,1,-3,-2]],
        resultado:[[4,4],[-2,1],[8,-3],[3,-2]]
    }
]
// probarIntercambiar.forEach((data:datosProbarModificacionMatrix,index)=>{
//     Deno.test(`Intercambiar filas por columnas ${index}`, () => {
//         assertEquals(intercambiarFilasPorColumnas(data.matrix),data.resultado)
//     });
// })
let probarOrdenar:datosProbarModificacionMatrix[]= [
   



    {
        matrix:[[0,1,0,0],[1,0,0,0],[0,0,1,0]],
        resultado:[[1,0,0,0],[0,1,0,0],[0,0,1,0]]
    },
    {
        matrix:[[4,2,-1,-5],[2,-1,0,4],[1,2,3,12]],
        resultado:[[1,2,3,12],[2,-1,0,4],[4,2,-1,-5]]
    },
    {
        matrix:[[2,1,-3],[1,1,2],[-1,-2,0]],
        resultado:[ [ -1, -2, 0 ], [ 1, 1, 2 ], [ 2, 1, -3 ] ]
    },
    {
        matrix:[[2,7,3,-7],[1,3,4,3],[1,4,3,-2]],
        resultado: [ [ 1, 4, 3, -2 ], [ 2, 7, 3, -7 ], [ 1, 3, 4, 3 ] ]
    } 
]
// probarOrdenar.forEach((data:datosProbarModificacionMatrix,index)=>{
//     Deno.test(`Ordenar matriz ${index}`, () => {
//         assertEquals(ordenarMatriz(data.matrix),data.resultado)
//     });
// })

// interface datosProbar {
//     matrix:number[][]//|[[number,number,number,number],[number,number,number,number],[number,number,number,number]]
//     indice:[number,number]
//     resultado:any;
// }
// let probar:datosProbar[]= [
//     {
//         matrix:[[4,-2,8,3],[4,1,-3,-2]],
//         indice:[1,0],
//         resultado:[[4,-2,8,3],[0,3,-11,-5]],
//     },
//     {
//         matrix:[[2,3,-1,-4],[-4,0,2,-1]],
//         indice:[1,0],
//         resultado:[[2,3,-1,-4],[0,6,0,-9]],
//     }
// ]
// probar.forEach((data:datosProbar,index)=>{
//     Deno.test(`Dconvertir en cero ${index}`, () => {
//         assertEquals(convertirEnCeroIndiceSeleccionado(data.matrix,data.indice),data.resultado)
//     });
// })
