import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {Algebra_lineal} from "../Algebra_lineal.ts"
console.log(Algebra_lineal)
let algebra_lineal = new Algebra_lineal();
function comprobarCorrectoDeterminante(sistema:number[][],resutadosDeterminante:number[]):number[][]{
   let sistemaMatrix:number[][] = sistema.map(a => a.filter((b,i)=> i != a.length-1))
   let resultados_matrix:number[][] = sistema.map(a => a.filter((b,i)=> i == a.length-1))
   let convertido = sistemaMatrix.map((fila) => fila.map((columna,i)=> columna*resutadosDeterminante[i])).map((fila)=>fila.reduce((a,b)=>a+b))
   return [convertido,resultados_matrix.flat()]
}

interface Vectores {
    V:number[][]
    resultado:number[];
}
let vectores:Vectores[] = [
    {V:[[5,2],[3,8]],resultado:[8,10]},
    {V:[[-3,5],[2,-3]],resultado:[-1,2]},
    {V:[[3,8],[2,-3]],resultado:[5,5]},
    {V:[[-4,-8],[2,-3]],resultado:[-2,-11]},
    {V:[[5,2],[2,-3],[-4,-8]],resultado:[3,-9]},
    {V:[[5,2],[3,8],[4,8]],resultado:[12,18]}


]
vectores.forEach((data,index)=>{
    Deno.test(`sumar  parametros ${index}`, () => {
        assertEquals(algebra_lineal.sumarVector(...data.V),data.resultado) 
    });
})

 vectores= [
    {V:[[5,2],[3,8]],resultado:[2,-6]},
    {V:[[-3,5],[2,-3]],resultado:[-5,8]},
    {V:[[2,-3],[-3,5]],resultado:[5,-8]},
    {V:[[3,8],[-3,5]],resultado:[6,3]},
    {V:[[2,-3],[-4,-8]],resultado:[6,5]},

]
vectores.forEach((data,index)=>{
    Deno.test(`restar ${index}`, () => {
        assertEquals(algebra_lineal.restarVector(...data.V),data.resultado) 
    });
})

vectores= [
    {V:[[3,1,-2],[1,1,2]],resultado:[0]},
    {V:[[2,-5,1],[4,2,2]],resultado:[0]},
    {V:[[4,-8,12],[-3,-9,+6]],resultado:[132]},

]
vectores.forEach((data,index)=>{
    Deno.test(`multiplicar ${index}`, () => {
        assertEquals(algebra_lineal.productoEscalar(...data.V),data.resultado[0]) 
    });
})
vectores= [
    {V:[[4,-8,12],[-3,-9,+6]],resultado:[4/-3,0.8888888888888888,2]},

]
vectores.forEach((data,index)=>{
    Deno.test(`divicion ${index}`, () => {
        assertEquals(algebra_lineal.diviPrueba(...data.V),data.resultado) 
    });
})
vectores= [
    {V:[[1,-5,3,1],[3,-2,6,-5],[1,-1,1,-3]],resultado:[ -4.714285714285714, -0.2857142857142857, 1.4285714285714286 ]},
    {V:[[1,1,100],[1,-0.5,80.5]],resultado:[ 87 ,13  ]},
    {V:[[-2,-3,1],[3,4,0]],resultado:[ 4 ,-3  ]},
    {V:[[1,-5,8,2],[-3,0,5,1],[1,2,1,8]],resultado:[ 2.0306122448979593, 2.2755102040816326, 1.4183673469387754 ]},
    {V:[[30,50,20,1690],[40,20,10,1160],[10,30,30,1210]],resultado:[ 16, 17, 18 ]},
    {V:[[2,-3,1,5],[1,2,-1,7],[3,-8,2,4]],resultado:[ 4.285714285714286, 0.8571428571428571, -1 ]},

]
vectores.forEach((data,index)=>{
    Deno.test(`metodo_de_cramer ${index}`, () => {
        assertEquals(algebra_lineal.metodo_de_cramer(data.V),data.resultado) 
    });
})


interface DataDeterminantes {
    sistema:number[][]
    determinante:number;
}
let dataDeterminantes:DataDeterminantes[] = [
    {sistema:[[7,-1],[8,12]],determinante:92},
    {sistema:[[-4,-2],[-7,5]],determinante:-34},
    {sistema:[[1/2,-2],[3/4,4]],determinante:7/2},
    {sistema:[[5,-3],[6,4]],determinante:38},
]
dataDeterminantes.forEach((data,index)=>{
    Deno.test(`solo  determinante ${index}`, () => {
        assertEquals( algebra_lineal.determinante(data.sistema), data.determinante);
    });
})

interface dataTestSistema {
    sistemaDatos:number[][];
    dataTest:DataTest[],
    determinante:number
}

interface DataTest {
    fila:number;
    columna:number;
    respuestaMenor:number[][];
    respuestaDeterminante:number;
    respuestaCofactor:number;
}

let dataPruebas:dataTestSistema[] = [
    {sistemaDatos:[[5,-2,4],[6,7,-3],[3,0,2]],
        dataTest: [
            {fila:3,columna:1,respuestaMenor:[[-2,4],[7,-3]],respuestaDeterminante:-22,respuestaCofactor:-22},
            {fila:3,columna:3,respuestaMenor:[[5,-2],[6,7]],respuestaDeterminante:47,respuestaCofactor:47}
        ],
        determinante:28
    },
    {sistemaDatos:[[10,-2,0],[5,-4,7],[3,1,-1]],
        dataTest: [
            {fila:2,columna:3,respuestaMenor:[[10,-2],[3,1]],respuestaDeterminante:16,respuestaCofactor:-16},
            {fila:3,columna:3,respuestaMenor:[[10,-2],[5,-4]],respuestaDeterminante:-30,respuestaCofactor:-30}
        ],
        determinante:-82
    },
]
dataPruebas.forEach((testsistemaDatos,indexMatrix)=>{
    testsistemaDatos.dataTest.forEach((data, index) => {
        Deno.test(`matrix ${indexMatrix} menor prueba ${index}`, () => {
            assertEquals( algebra_lineal.menor(testsistemaDatos.sistemaDatos,data.fila,data.columna), data.respuestaMenor);
        });
        Deno.test(`matrix ${indexMatrix} determinante ${index}`, () => {
            assertEquals( algebra_lineal.determinante(data.respuestaMenor), data.respuestaDeterminante);
        });
        Deno.test(`matrix ${indexMatrix} cofactor ${index}`, () => {
            assertEquals( algebra_lineal.cofactor(testsistemaDatos.sistemaDatos,data.fila,data.columna), data.respuestaCofactor);
        });
    });
    Deno.test(`determinante toda la matrix matrix ${indexMatrix}`, () => {
        assertEquals( algebra_lineal.determinante_Laplace(testsistemaDatos.sistemaDatos), testsistemaDatos.determinante);
    });
})
//regla de cramer
interface SistemaCramer {
    sistema:number[][];
    determinanteN:number;
    dataTest:dataTestCramer[]
    cramer:number[]
}
interface dataTestCramer {
    columna:number;
    determinanteMatrix:number[][];
    determinanteN:number;
}
let sistemasCrame:SistemaCramer[] = [
    // {sistema:[[2,1,-2,1],[3,-2,1,0],[1,3,-1,2]],
    // dataTest:[
    //     {columna:0,determinanteMatrix:[[1,1,-2],[0,-2,1],[2,3,-1]],determinanteN:-7},
    //     {columna:1,determinanteMatrix:[[2,1,-2],[3,0,1],[1,2,-1]],determinanteN:-12},
    //     {columna:2,determinanteMatrix:[[2,1,1],[3,-2,0],[1,3,2]],determinanteN:-3}

    // ] ,determinanteN:-20,
    // cramer:[7/20,3/5,3/20]
    // },
    
    {sistema:[[4,2,116],[1,1,35]],
        dataTest:[
            {columna:0,determinanteMatrix:[[116,2],[35,1]],determinanteN:46},
            {columna:1,determinanteMatrix:[[4,116],[1,35]],determinanteN:24}
    
        ] ,determinanteN:2,
        cramer:[23,12]
    },   
    {sistema:[[5,-2,-2],[-3,7,-22]],
        dataTest:[
            {columna:0,determinanteMatrix:[[-2,-2],[-22,7]],determinanteN:-58},
            {columna:1,determinanteMatrix:[[5,-2],[-3,-22]],determinanteN:-116}
    
        ] ,determinanteN:29,
        cramer:[-2,-4]
    },
    {sistema:[[1,2,4,35000],[4,4,1,34000],[2,3,4,42000]] ,
        dataTest:[
            {columna:0,determinanteMatrix:[[35000,2,4],[34000,4,1],[42000,3,4]],determinanteN:3000},
            {columna:1,determinanteMatrix:[[1,35000,4],[4,34000,1],[2,42000,4]],determinanteN:4000},
            {columna:2,determinanteMatrix:[[1,2,35000],[4,4,34000],[2,3,42000]],determinanteN:6000},

            

        ] ,determinanteN:1,
        cramer:[3000,4000,6000]
    },
]
sistemasCrame.forEach((datos,indexSistema)=>{
    let mapsistema = datos.sistema.map((a,i)=>a.filter((b,d)=>d!= a.length-1))
    datos.dataTest.forEach((tData,index_fila)=>{
        Deno.test(`cambiar columna sistema index ${indexSistema} fila ${index_fila}`, () => {
            assertEquals( algebra_lineal.cambiarColumnaPorEstosDatos(mapsistema,datos.sistema,tData.columna), tData.determinanteMatrix);
        });
        Deno.test(`determinante index ${indexSistema} fila ${index_fila}`, () => {
            assertEquals( algebra_lineal.determinante_Laplace(tData.determinanteMatrix), tData.determinanteN);
        });
    })
    Deno.test(`sistema index ${indexSistema} determinante toda la matrix matrix regla de cramer`, () => {
        assertEquals( algebra_lineal.determinante_Laplace(mapsistema), datos.determinanteN);
    }); 
    Deno.test(`sistema index ${indexSistema} cramer resultado`, () => {
        assertEquals( algebra_lineal.metodo_de_cramer(datos.sistema), datos.cramer);
    }); 
    Deno.test(`validacion cramer con los iguales ${indexSistema} `, () => {
        let cramer=  algebra_lineal.metodo_de_cramer(datos.sistema)
        let repuestas = comprobarCorrectoDeterminante(datos.sistema,cramer)
        assertEquals(repuestas[0] ,repuestas[1] );
    
    });  
    
})






Deno.test("validacion ejercicio 1 C ", () => {
    let sistema = [[1,2,4,35000],[4,4,1,34000],[2,3,4,42000]] 
    let cramer=  algebra_lineal.metodo_de_cramer(sistema);
    let repuestas = comprobarCorrectoDeterminante(sistema,cramer)
    assertEquals(repuestas[0] ,repuestas[1] );

});
// Deno.test("1. cofactor 3,3", () => {
//     assertEquals( algebra_lineal.cofactor(sistemaDatos,3,3), 47);
// });

// Deno.test("1. determinante_Laplace", () => {
//     assertEquals( algebra_lineal.determinante_Laplace(sistemaDatos), 28);
// });

