import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import {
    metodoGaust,
    ordenarMatriz,
    metodoGaustJordan,
    encontrarCero2x2,
    convertirEnCeroIndiceSeleccionado,
    intercambiarFilasPorColumnas ,
    metodoSimplexprimal,
    VariableSimple,
    Ecuation,
    metodoSimplexDual,
    resulMetodoSimplexPrimal
} from "../src/programacion_lineal/index.ts";
console.clear()
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
    },
    {
        matrix:[[550,-250,-300,3],[-250,850,-450,5],[-300,-450,1350,-5]],
        resultado:[
            [ 1, -0.45454545454545453, -0.5454545454545454, 0.005454545454545455 ],
            [ 0, 1, -0.7962962962962963, 0.008641975308641974 ],
            [ 0, 0, 1, 0.002368082368082367 ]]
    }  
]
probarMetodoGaust.forEach((data:datosProbarModificacionMatrix,index)=>{
    Deno.test(`Metodo de Gaust ${index}`, () => {
        assertEquals(metodoGaust(data.matrix),data.resultado)
    });
})

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
    {
        matrix:[[4,2,-1,-5],[2,-1,0,4],[1,2,3,12]],
        resultado:[[ 1, 0, 0, 1 ],[ 0, 1, 0, -1.9999999999999991 ],[ -0, -0, 1, 4.999999999999999 ]]
    },
    {
        matrix:[[2,7,3,-7],[1,3,4,3],[1,4,3,-2]],
        resultado:[[1,0,0,4],[-0,1,0,-3],[0,0,1,2]]
    } ,
    {
        matrix:[[1,-1,3,13],[1,1,1,11],[2,2,-1,7]],
        resultado:[[1,0,0,2],[0,1,0,4],[0,0,1,5]]
    } ,
    
    {
        matrix:[[12,-8,-4,6],[-8,10,0,-10],[-4,0,7.5,8]],
        resultado:[[1,0,0,0.653846153846154],[0,1,0,-0.4769230769230768],[0,0,1,1.4153846153846155]]
    } ,
    {
        matrix:[[550,-250,-300,3],[-250,850,-450,5],[-300,-450,1350,-5]],
        resultado:[
            [ 1, 0, 0, 0.01153153153153153 ],
            [ 0, 1, 0, 0.010527670527670526 ],
            [ 0, 0, 1, 0.002368082368082367 ]]
    } ,
    {
        matrix:[
            [-1,1,1,0],
            [3,0,8,-10],
            [0,-5,8,-20]
        ],
        resultado:[
            [ 1, 0, 0, 0.3797468354430378 ],
            [ 0, 1, 0, 1.772151898734177 ],
            [ 0, 0, 1, -1.3924050632911393 ]
        ]
    } ,
    // {
    //     matrix:[
    //         [-1,4,-1],
    //         [1,3,9]
    //     ],
    //     resultado:[
    //         [ 1, 0, 39/7 ],
    //         [ 0, 1, 8/7]
    //     ]
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
probarIntercambiar.forEach((data:datosProbarModificacionMatrix,index)=>{
    Deno.test(`Intercambiar filas por columnas ${index}`, () => {
        assertEquals(intercambiarFilasPorColumnas(data.matrix),data.resultado)
    });
})
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
probarOrdenar.forEach((data:datosProbarModificacionMatrix,index)=>{
    Deno.test(`Ordenar matriz ${index}`, () => {
        assertEquals(ordenarMatriz(data.matrix),data.resultado)
    });
})

interface datosProbar {
    matrix:number[][]//|[[number,number,number,number],[number,number,number,number],[number,number,number,number]]
    indice:[number,number]
    resultado:any;
}
let probar:datosProbar[]= [
    {
        matrix:[[4,-2,8,3],[4,1,-3,-2]],
        indice:[1,0],
        resultado:[[4,-2,8,3],[0,3,-11,-5]],
    },
    {
        matrix:[[2,3,-1,-4],[-4,0,2,-1]],
        indice:[1,0],
        resultado:[[2,3,-1,-4],[0,6,0,-9]],
    }
]
// probar.forEach((data:datosProbar,index)=>{
//     Deno.test(`Dconvertir en cero ${index}`, () => {
//         assertEquals(convertirEnCeroIndiceSeleccionado(data.matrix,data.indice),data.resultado)
//     });
// })

let simplexPrimal:{matrix:VariableSimple,resultado:resulMetodoSimplexPrimal}[]= [
    {
        matrix:
            {
                z:{x:[-24,-22,-45],sol:0},
                ecuations:[
                    {x:[2,1,3],sol:42},
                    {x:[2,1,2],sol:40},
                    {x:[1,0.5,1],sol:45}
                ]
            }
        ,
        resultado:{
            matrix:[
            [20,  0, 0,1,1, 21, 0, 882],
            [0,  0, 1, 0,1, -1, 0, 2],
            [2, 1, 0,  0,-2, 3, 0, 36],
            [0,0, 0,  0,0, -0.5, 1, 25]
            ],
            colectionCol:  [  1, 2 ],
            solucion:{z:882,x:[ { c: 1, f: 36 }, { c: 2, f: 2 } ]}
        }
        
    },
    {
        matrix://https://youtu.be/L0Hg3cuPgy0?t=571
            {
                z:{x:[-2,-1,3,-5],sol:0},
                ecuations:[
                    {x:[1,2,2,4],sol:40},
                    {x:[2,-1,1,2],sol:8},
                    {x:[4,-2,1,-1],sol:40}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0.38, 0,5.5,0,1,0.88,0.75 , 0,41],
                [-0.75, 1,0  ,0,0,0.25,-0.5 , 0,6],
                [0.63 , 0,0.5,1,0,0.13,0.25 , 0,7],
                [3.13 , 0,1.5,0,0,0.63,-0.75, 1,59]
            ],
            colectionCol: [ 1, 3 ],
            solucion:{z:41,x:[ { c: 1, f: 6 }, { c: 3, f: 7 }]}
        }
    },
    {
        matrix://https://youtu.be/L0Hg3cuPgy0?t=571
            {
                z:{x:[-56	,-61,	-58],sol:0},
                ecuations:[
                    {x:[6	,8	,5],sol:2000},
                    {x:[16	,15,	13],sol:5000},
                    {x:[18	,20,	21],sol:7000}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0,  0,  0,  1,  1.03,  0.93,  1.94,  20296.61],
                [ 0,1,0,0,  0.43, -0.15,-0.01, 42.37],

                [1,0,0,0,-0.23,   0.29,-0.12, 114.41],

                [  0,0,1,0,-0.21,-0.1,0.16, 194.92]
            ],
            colectionCol: [  0, 1, 2 ],//114.4067797	42.37288136	194.9152542
            solucion:{z: 20296.61 ,x:[
                { c: 0, f: 114.41 },
                { c: 1, f: 42.37 },
                { c: 2, f: 194.92 }
            ]}
        }
    },
    {//https://drive.google.com/file/d/1IaPnWc8AqXy4ZvqfgSkKNlj8xQviUx7n/view
        matrix:
            {
                z:{x:[-250000  , -280000  , -260000 ],sol:0},
                ecuations:[
                    {x:[10  , 7  , 6 ],sol:500},
                    {x:[8  , 5  , 4 ],sol:600},
                    {x:[5  , 9  , 6 ],sol:400}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [   0, 96666.67,0,1,6666.67,0,36666.67, 18000000],
                [   1, -0.4,    0,  0,0.2,    0, -0.2, 20],

                [ 0,  0.87, 0,0, -0.93, 1,0.27,   240],

                [   0,  1.83, 1,0, -0.17, 0,0.33,    50]
            ],
            colectionCol: [  0,  2 ],
            solucion:{z: 18000000, x: [ { c: 0, f: 20 }, { c: 2, f: 50 } ]}
        }
    }
    	
    	
    	
]
simplexPrimal.forEach((data:{matrix:VariableSimple,resultado:resulMetodoSimplexPrimal},index)=>{
    Deno.test(`metodoSimplexprimal ${index}`, () => {
        assertEquals(metodoSimplexprimal(data.matrix),data.resultado)
    });
})


let simplexDual:{matrix:VariableSimple,resultado:resulMetodoSimplexPrimal}[]= [

    {
        matrix://https://www.youtube.com/watch?v=R6qj-A6VXvQ
            {
                z:{x:[-60000	,-100000],sol:0},
                ecuations:[
                    {x:[-10	,-25],sol:-50},
                    {x:[-12	,-20],sol:-50}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0, 0,1, 0, -5000, 250000 ], 
                [ 0, 1,0, -0.12, 0.1, 1 ],
                [ 1, 0,0, 0.2, -0.25, 2.5 ] 
            ],
            colectionCol: [  0, 1 ],
            solucion:{z: 250000 ,x:[
                { c: 0, f: 2.5 },
                { c: 1, f: 1 }
            ]}
        }
    },
    {
        matrix://https://www.youtube.com/watch?v=Sa0z3H_zRuw
            {
                z:{x:[-3,-2],sol:0},
                ecuations:[
                    {x:[-3	,-1],sol:-3},
                    {x:[-4	,-3],sol:-6},
                    {x:[1	,1],sol:3}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0, 0,1, -1/5,-3/5,0,21/5 ],
                [1,0,0,-3/5,1/5,0,3/5],
                [0,1,0,4/5,-3/5,0,6/5],
                [0,0,0,-1/5,0.4,1,6/5]
            ],
            colectionCol: [  0, 1 ],
            solucion:{z: 21/5 ,x:[
                { c: 0, f: 3/5 },
                { c: 1, f: 6/5 },
            ]}
        }
    },
    {
        matrix:
            {
                z:{x:[-1000,-6300,-2200],sol:0},
                ecuations:[
                    {x:[-1,-7.5,-3],sol:-150},
                    {x:[-1,-15,-2],sol:-200},
                    {x:[-1,-5,-2],sol:-120},
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0 , 0 , 0 , 1 , -200 , -80  , -720 , 132400 ],
                [ 0 , 0 , 1 , 0 ,  -1  , 0.25 , 0.75 ,   10   ],
                [ 0 , 1 , 0 , 0 ,  0   , -0.1 , 0.1  ,   8    ],
                [ 1 , 0 , 0 , 0 ,  2   ,  0   ,  -3  ,   60 ]
            ],
            colectionCol: [  0, 1,2 ],
            solucion:{z: 132400 ,x:[
                { c: 0, f: 60 },
                { c: 1, f: 8 },
                { c: 2, f: 10 }
            ]}
        }
    },
    {
        matrix://https://www.youtube.com/watch?v=Sa0z3H_zRuw
            {
                z:{x:[-3,-2],sol:0},
                ecuations:[
                    {x:[-3	,-1],sol:-3},
                    {x:[-4	,-3],sol:-6},
                    {x:[1	,1],sol:3}
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0, 0,1, -1/5,-3/5,0,21/5 ],
                [1,0,0,-3/5,1/5,0,3/5],
                [0,1,0,4/5,-3/5,0,6/5],
                [0,0,0,-1/5,0.4,1,6/5]
            ],
            colectionCol: [  0, 1 ],
            solucion:{z: 21/5 ,x:[
                { c: 0, f: 3/5 },
                { c: 1, f: 6/5 },
            ]}
        }
    },
    {
        matrix:
            {
                z:{x:[-29000,-28000,-30000 		],sol:0},
                ecuations:[
                    {x:[-6,-5,-7],sol:-13000},
                    {x:[-4,-4,-3],sol:-8500},
                    {x:[-3,-5,-3],sol:-9500},
                ]
            }
        ,
        resultado:
        { 
            matrix:[
                [ 0 , 0 , 0 , 1 , -3000 , -2000  , -1000 , 65500000 ],
                [ 0 , 0 , 1 , 0 ,  -0.35  , 0.65 , -0.17 ,   630.43   ],
                [ 1 , 0 , 0 , 0 ,  0.13   , -0.87 , 0.57  ,   326.09   ],
                [ 0 , 1 , 0 , 0 ,  0.13   ,  0.13   ,  -0.43  ,   1326.09 ]
            ],
            colectionCol: [  0, 1,2 ],
            solucion:{
                z: 65500000,
                x: [ { c: 0, f: 326.09 }, { c: 1, f: 1326.09 }, { c: 2, f: 630.43 }
            ]}
        }
    }
]
simplexDual.forEach((data:{matrix:VariableSimple,resultado:resulMetodoSimplexPrimal},index)=>{
    Deno.test(`metodoSimplexDual ${index}`, () => {
        assertEquals(metodoSimplexDual(data.matrix),data.resultado)
    });
})