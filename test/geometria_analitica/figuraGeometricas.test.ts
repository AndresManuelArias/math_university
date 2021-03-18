import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as geometria_analitica from "../../src/geometria_analitica/index.ts"
interface probarAreaTrapecio {
    areaTrapecio:geometria_analitica.AreaTrapecio
    resultado: number
}

let probarAreaTrapecioPuntos:probarAreaTrapecio[]=[
    {
        areaTrapecio:{
        lineaB:{puntoA:{x:-7,y:4},puntoB:{x:5,y:1}},
        lineab:{puntoA:{x:-4,y:-1},puntoB:{x:0,y:-2}},
        lineah:{puntoA:{x:1,y:2},puntoB:{x:0,y:-2}},
        },
        resultado:34
    }
]
probarAreaTrapecioPuntos.forEach((data:probarAreaTrapecio,index)=>{
    Deno.test(`area trapecio entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaTrapecioPuntos(data.areaTrapecio.lineaB,data.areaTrapecio.lineab,data.areaTrapecio.lineah),data.resultado)
    });
})

interface ProbarAreaCuadrado {
    lineas:geometria_analitica.linea[]
    resultado: number|boolean
}
let probarAreaCuadradosPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-8,y:0},puntoB:{x:4,y:4}},
            {puntoA:{x:4,y:4},puntoB:{x:6,y:-2}}
        ],
        resultado:80.00000000000001
    },
    {
        lineas:[
            {puntoA:{x:1,y:-1},puntoB:{x:-3,y:-9}},
            {puntoA:{x:1,y:-1},puntoB:{x:5,y:-3}}
        ],
        resultado:40.00000000000001
    },
    {
        lineas:[
            {puntoA:{x:-2,y:-3},puntoB:{x:2,y:-2}},
            {puntoA:{x:-2,y:-3},puntoB:{x:-4,y:5}}
        ],
        resultado:34
    },
    {
        lineas:[
            {puntoA:{x:35,y:5},puntoB:{x:45,y:-25}},
            {puntoA:{x:35,y:5},puntoB:{x:-25,y:-15}}
        ],
        resultado:2000
    },
    {
        lineas:[
            {puntoA:{x:-40,y:80},puntoB:{x:-20,y:20}},
            {puntoA:{x:-20,y:20},puntoB:{x:-50,y:10}}
        ],
        resultado:Math.sqrt(1000)*Math.sqrt(4000)
    }
]
probarAreaCuadradosPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area cuadrado entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaCuadradoPuntos(data.lineas[0],data.lineas[1]),data.resultado)
    });
})

let probarAreaTriangulosPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-4,y:-6},puntoB:{x:2,y:-8}},
            {puntoA:{x:-6,y:-2},puntoB:{x:-7,y:-5}}
        ],
        resultado:10.000000000000002
    },
    {
        lineas:[
            {puntoA:{x:1,y:8},puntoB:{x:6,y:6}},
            {puntoA:{x:1,y:8},puntoB:{x:-5,y:-7}}
        ],
        resultado:43.49999999999999
    },
    {
        lineas:[
            {puntoA:{x:-3,y:-4},puntoB:{x:7,y:-2}},
            {puntoA:{x:2,y:-3},puntoB:{x:0,y:7}}
        ],
        resultado:51.99999999999999
    }
]
probarAreaTriangulosPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area triangulos entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaTrianguloPuntos(data.lineas[0],data.lineas[1]),data.resultado)
    });
})

let probarAreaCirculoPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:-20,y:20},puntoB:{x:10,y:20}}
        ],
        resultado:2827.4333882308138
    },
    {
        lineas:[
            {puntoA:{x:10,y:40},puntoB:{x:40,y:40}}
        ],
        resultado:2827.4333882308138
    }

]
probarAreaCirculoPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`area circulos entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.areaCirculoPuntos(data.lineas[0].puntoA,data.lineas[0].puntoB),data.resultado)
    });
})
let probarPerimetroCirculoPuntos:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:10,y:40},puntoB:{x:40,y:40}}
        ],
        resultado:188.49555921538757
    },
    {
        lineas:[
            {puntoA:{x:0,y:0},puntoB:{x:120,y:0}}
        ],
        resultado:753.9822368615503
    }
]
probarPerimetroCirculoPuntos.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`perimetro circulos entre puntos ${index}`, () => {
        assertEquals(geometria_analitica.perimetroCirculoPuntos(data.lineas[0]),data.resultado)
    });
})

interface ProbarTriangulo{
    lineas:geometria_analitica.linea[]
    resultados: any[]
}

let probarTriangulos:ProbarTriangulo[]=[
    {
        lineas:[
            {puntoA:{x:2,y:1},puntoB:{x:3,y:-2}},
            {puntoA:{x:3,y:-2},puntoB:{x:6,y:-1}},
            {puntoA:{x:6,y:-1},puntoB:{x:2,y:1}}
        ],
        resultados:[2,
            {
                linea: { puntoA: { x: 6, y: -1 }, puntoB: { x: 2, y: 1 } },
                distancia: Math.sqrt(20)
           }      
        ,true
        ],
    },
    {
    lineas:[
            {puntoA:{x:1,y:1},puntoB:{x:3,y:0}},
            {puntoA:{x:3,y:0},puntoB:{x:4,y:2}},
            {puntoA:{x:4,y:2},puntoB:{x:1,y:1}}
        ],
        resultados:[2,
            {
                linea: { puntoA: { x: 4, y: 2 }, puntoB: { x: 1, y: 1 } },
                distancia: Math.sqrt(10)
            },
            true
        ]
    },
    {
    lineas:[
            {puntoA:{x:0,y:0},puntoB:{x:1,y:2}},
            {puntoA:{x:1,y:2},puntoB:{x:3,y:1}},
            {puntoA:{x:3,y:1},puntoB:{x:0,y:0}}
        ],
        resultados:[2,
            {
                linea: {puntoA:{x:3,y:1},puntoB:{x:0,y:0}},
                distancia: Math.sqrt(10)
            },
            true
        ]
    }
    , {
        lineas:[
                {puntoA:{x:0,y:2},puntoB:{x:2,y:4}},
                {puntoA:{x:2,y:4},puntoB:{x:6,y:0}},
                {puntoA:{x:6,y:0},puntoB:{x:0,y:2}}
            ],
            resultados:[0,
                {
                    linea: {puntoA:{x:6,y:0},puntoB:{x:0,y:2}},
                    distancia: Math.sqrt(40)
                },
                true
            ]
        }
]
probarTriangulos.forEach((data:ProbarTriangulo,index)=>{
    Deno.test(`Si es isoceles ${index}`, () => {
        assertEquals(geometria_analitica.conteo_lados_iguales(data.lineas),data.resultados[0])
    });
    Deno.test(`Lado mayor ${index}`, () => {
        assertEquals(geometria_analitica.ladoMayor(data.lineas),data.resultados[1])
    });
    Deno.test(`Es triangulo Rectangulo ${index}`, () => {
        assertEquals(geometria_analitica.saber_si_es_triangulo_rectangulo(data.lineas),data.resultados[2])
    });
})

let lados_iguales:ProbarAreaCuadrado[]=[
    {
        lineas:[
            {puntoA:{x:2,y:1},puntoB:{x:3,y:-2}},
            {puntoA:{x:3,y:-2},puntoB:{x:6,y:-1}},
            {puntoA:{x:6,y:-1},puntoB:{x:2,y:1}}
        ],
        resultado:2
    },
    {
    lineas:[
            {puntoA:{x:1,y:1},puntoB:{x:3,y:0}},
            {puntoA:{x:3,y:0},puntoB:{x:4,y:2}},
            {puntoA:{x:4,y:2},puntoB:{x:1,y:1}}
        ],
        resultado:2
    }
]
lados_iguales.forEach((data:ProbarAreaCuadrado,index)=>{
    Deno.test(`Si es isoceles ${index}`, () => {
        assertEquals(geometria_analitica.conteo_lados_iguales(data.lineas),data.resultado)
    });
})

interface ProbarAreaPoligono {
    puntos:geometria_analitica.Punto[]
    apotema:geometria_analitica.linea
    resultado:number|number[]|any;
}
// let probarAreaPoligonoPuntos:ProbarAreaPoligono[]=[
//     {
//         puntos:[
//             {x:-20,y:20},{x:10,y:20}
//         ],
//         apotema:{puntoA:{x:2,y:3},puntoB:{x:2,y:3}},
//         resultado:2827.4333882308138
//     }
// ]
// probarAreaPoligonoPuntos.forEach((data:ProbarAreaPoligono,index)=>{
//     Deno.test(`area poligonos entre puntos ${index}`, () => {
//         assertEquals(geometria_analitica.areaPoligonoRegularPuntos(data.puntos,data.apotema),data.resultado)
//     });
// })
