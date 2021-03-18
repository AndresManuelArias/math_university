import * as $C from 'https://cdn.jsdelivr.net/npm/js-combinatorics@1.4.5/combinatorics.min.js';
import {imprimirPermutaciones,imprimirCombinaciones,combination, factorial,imprimirFactorial} from "../../probabilidad/api/index.ts";
let letras:string[]=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
let volumenes = new $C.Permutation(letras,2);
let number:number[] = [...Array(10).keys()]
let numeros = new $C.Permutation(number,3);
let [...V] = volumenes;
console.log("volumenes",V.length);
let [...N]= numeros;
console.log("numeros",N.length)
// console.log(V.concat(N))
let placas:any[]=[]
V.forEach((v:string[])=>{
    N.forEach((n:number[])=>{
        placas.push([v,n].flat())
    })
})

console.log("placas",placas.length)
// console.log(P.map((a:any)=>a.flat()));
for (let index = 0; index < 6; index++) {
    console.log(imprimirPermutaciones(letras.length,2,index)) 
}
for (let index = 0; index < 6; index++) {
    console.log(imprimirPermutaciones(number.length,3,index)) 
}

let platos:string[][]=[]
 
let entrada:string[] = ['N','E','S']

let platoPrincipal:string[] = ['P', 'H', 'Q', 'T']

let Bebidas:string[]  = ['G','L','C']


entrada.forEach((e:string)=>{
    platoPrincipal.forEach((p:string)=>{
        Bebidas.forEach((b:string)=>{
            platos.push([e,p,b])
        })
    })
})
// console.log(platos,platos.length,entrada.length*platoPrincipal.length*Bebidas.length)

console.log(platos.map((p:string[])=>`{${p.join(' ,')}}`).join(" ,"))

let personas:number[]= [...  Array(16).keys()].splice(1)
let pers = new $C.Permutation(personas,3);
let [...pe]= pers;
console.log(pe,pe.length)

for (let index = 0; index < 6; index++) {
    console.log(imprimirPermutaciones(personas.length,3,index)) 
}
//ejercicio 4 b
let grupos:number[]= [4,5,8 , 6]
// grupos.sort((a,b)=>a-b)
personas= [...  Array(26).keys()].splice(1)
let multiplicacion:number[] = [];
console.log("ejercio 4b")
console.log(imprimirFactorial(25))
console.log(factorial(25))
grupos.forEach((g:number)=>{
    console.log("----------------------------")
    console.log(imprimirFactorial(g)) 
    console.log(factorial(g)) 

    let mul:number= factorial(personas.length)
    multiplicacion.push( mul)
    // console.log(multiplicacion)
    // for (let index = 0; index < 6; index++) {
    //     console.log(imprimirFactorial(personas.length)) 
    // }
    // personas = personas.splice(g)

})
console.log(multiplicacion,multiplicacion.reduce((a,b)=>a*b))
// //.reduce((n1,n2)=>n1+n2)
let conteo:number[]=[... Array(5).keys()].splice(1)
grupos.unshift(0)
console.log(conteo.map((i)=>  combination(25-grupos.filter((g,j)=>j < i).reduce((m1,m2)=>m1+m2),grupos[i] ) ))
console.log("resultado:",factorial(25)/personas.map((m)=>factorial(m)).reduce((a,b)=>a*b))
///5 a
//¿De cuantas maneras distintas puede escogerse un comité de dos mujeres y cuatro hombres de un grupo de seis mujeres y siete hombres?

//7 hombres para 4 puestos
console.log("----------------------------")

for (let index = 0; index < 6; index++) {
    console.log(imprimirCombinaciones(7,4,index)) 
}
//6 mujeres para 2 puestos
console.log("----------------------------")

for (let index = 0; index < 6; index++) {

    console.log(imprimirCombinaciones(6,2,index)) 
}

//b) Determinar de cuántas formas pueden distribuirse 10 libros idénticos de física entre cinco estudiantes.

for (let index = 0; index < 6; index++) {

    console.log(imprimirCombinaciones(10,5,index)) 
}
// 2) Haga corresponder cada sucesión de recurrencia con su respectiva relación de recurrencia.

let a:number[]=[ -9, -3, 3, 9  ]
let b:number[]=[ -1, 3, 3, 15  ]
let c:number[]=[ -9, -3, 9, -2457  ]
let d:number[]=[ -9, 3, -1, 1/3  ]
let e:number[]=[ -9, -3, 3, 45/8  ]
//Relaciones de recurrencia:
let funcionesRecurrencias:any[]=[
    // function  (a:number[]):(n:number)=>number{
    //     return(n:number)=>  (-a[n-1]) /3
    // } ,
    function  (a:number[]):(n:number)=>number{
        return(n:number)=> ((12*a[n-1]) -(12*a[n-2])+(a[n-3])) /8    
    },
    // function  (a:number[]):(n:number)=>number{
    //     return(n:number)=> 2*a[n-1] - a[n-2]   
    // },
    function  (a:number[]):(n:number)=>number{
        return(n:number)=> -3*a[n-1]+81*a[n-2]-243*a[n-3]   
    },
    // function  (a:number[]):(n:number)=>number{
    //     return(n:number)=> 2*a[n-1]+3*a[n-2] 
    // }
]

function recurencia1(a:number[]):(n:number)=>number{
    return(n:number)=> (-a[n-1]) /3
}


funcionesRecurrencias.forEach((f:any,index:number)=>{
    console.log("recurrencia",index);
    [a,b,c,d,e,].forEach((n)=>{
        console.log(n);
        [... Array(n.length).keys()]
        .forEach(element => {
           console.log(f(n)(element))
        });
    })
})



