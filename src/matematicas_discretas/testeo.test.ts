import {
    assertEquals,
    assertArrayContains,
  } from "https://deno.land/std/testing/asserts.ts";
  import { Opbs } from "./Operaciones_basica_conjuntos.ts";
  
  interface conjuntos{
      A:number[],
      B:number[];
      C:number[];
  }
  
  let prueba:conjuntos[] = [
      {A:[5,3,17,12,19],B:[17,19,6],C:[3,5,12]},
      {A:[17,19,6],B:[5,3,17,12,19] ,C:[6]},
      {A:[5,10,15],B:[13,6,9,12,15],C:[5,10]},
      {A:[9,25],B:[1,4,9,16,25],C:[]},
      {A:[0,12,23],B:[3,12,15],C:[0,23]},

  ]
  prueba.forEach((dato,index)=>{
    Deno.test("diferencia "+index, () => {
        assertEquals(Opbs.diferencia(dato.A,dato.B).sort(), dato.C.sort());
      });
  })

prueba = [
    {A:[3,12,5,13],B:[14,15,6,3],C:[3]},
    {A:[11,4,12,7],B:[13,4,12,10,3],C:[4,12]},
    {A:[6,12,18,24],B:[12,18],C:[12,18]},
    {A:[10,20,30],B:[5,10,15,20],C:[10,20]},
]
prueba.forEach((dato,index)=>{
  Deno.test("Intersección "+index, () => {
      assertEquals(Opbs.Intersección(dato.A,dato.B).sort(), dato.C.sort());
    });
})


prueba = [
    {A:[5,10,15],B:[13,6,9,12,15],C:[5,10,13,6,9,12,15]},
    {A:[5,10,15],B:[3,6,9,12,15],C:[5,10,3,6,9,12,15]},
    {A:[1,2,8,9],B:[0,1,2,4,6,8,9],C:[0,1,2,4,6,8,9]},
    {A:[1,6,2,3,14],B:[2,9,13,1],C:[1,6,2,3,14,9,13]},
]
prueba.forEach((dato,index)=>{
  Deno.test("Union "+index, () => {
    assertEquals(Opbs.Union(dato.A,dato.B).sort(), dato.C.sort());
  });
})

interface relacion{
  parOrdenado:number[],
  paresOrdenados:number[][];
  resultado:number[][];
}

interface relacion2{
  relacion:number[][];
  resultado:boolean;
}
interface relacion3{
  relacion:number[][];
  resultado:number[][];
}
let paresOrdenados:number[][][] =[
  [[1,1],[1,3],[2,2],[3,1],[3,3],[4,4]],
  [[1,5],[1,3],[2,8],[5,8],[3,9],[3,4]],
  [[1, 1], [1, 2], [2,1]],
  [[1,1], [1,2], [2,1], [2,2], [3,4], [4,1], [4,4]],
  [[1, 1], [1,2], [1, 4], [2,1], [2,2], [3,3], [4,1], [4,4]],
  [[2,1], [3,1], [3,2], [4,1], [4,2], [4,3]],
  [[1,1], [1,2], [1,3], [1,4], [2,2], [2,3], [2,4], [3,3], [3,4], [4,4]]
]

let relaciones:relacion[] = [
  { 
    parOrdenado:[1,3],
    paresOrdenados:paresOrdenados[0],
    resultado:[[3,1]],
  },
  { 
    parOrdenado:[3,1],
    paresOrdenados:paresOrdenados[0],
    resultado:[[1,3]],
  },
  { 
    parOrdenado:[4,6],
    paresOrdenados:paresOrdenados[0],
    resultado:[],
  },
  { 
    parOrdenado:[1,2],
    paresOrdenados:paresOrdenados[3],
    resultado:[[2,1]],
  },
  { 
    parOrdenado:[2,1],
    paresOrdenados:paresOrdenados[3],
    resultado:[[1,2]],
  }
]
relaciones.forEach((dato,index)=>{
Deno.test("encontrarParesOrdenado "+index, () => {
  assertEquals(Opbs.encontrarParesOrdenado(dato.parOrdenado,dato.paresOrdenados), dato.resultado);
});
})
let relaciones2:relacion2[] = [
  {relacion:paresOrdenados[0],resultado:true},
  {relacion:paresOrdenados[1],resultado:false},
  {relacion:paresOrdenados[2],resultado:true},
  {relacion:paresOrdenados[3],resultado:true},

]
relaciones2.forEach((dato,index)=>{
  Deno.test("esSimetricas "+index, () => {
    assertEquals(Opbs.esSimetricas(dato.relacion), dato.resultado);
  });
})

let relaciones3:relacion3[] = [
  {relacion:paresOrdenados[0],resultado:[[1,3],[3,1]]},
  {relacion:paresOrdenados[1],resultado:[]},
  {relacion:paresOrdenados[2],resultado:[ [ 1, 2 ], [ 2, 1 ] ]},
  {relacion:paresOrdenados[3],resultado:[[1,2],[2,1]]},
  {relacion:paresOrdenados[4],resultado:[[1,2],[1, 4],[2,1],[4,1]]},
  {relacion:paresOrdenados[5],resultado:[]},
  {relacion:paresOrdenados[6],resultado:[]},

]
relaciones3.forEach((dato,index)=>{
  Deno.test("simetricas "+index, () => {
    assertEquals(Opbs.simetricas(dato.relacion), dato.resultado);
  });
})


relaciones = [
  { 
    parOrdenado:[1,1],
    paresOrdenados:paresOrdenados[0],
    resultado:[[1,1],[1,3]],
  },
  { 
    parOrdenado:[1,3],
    paresOrdenados:paresOrdenados[0],
    resultado:[[1,1],[1,3]],
  },
  { 
    parOrdenado:[3,1],
    paresOrdenados:paresOrdenados[0],
    resultado:[[3,1],[3,3]],
  },
  { 
    parOrdenado:[3,3],
    paresOrdenados:paresOrdenados[0],
    resultado:[[3,1],[3,3]],
  },
  { 
    parOrdenado:[1,5],
    paresOrdenados:paresOrdenados[1],
    resultado:[[1,8]]
  },
  { 
    parOrdenado:[1,3],
    paresOrdenados:paresOrdenados[1],
    resultado:[[1,9],[1,4]],
  },
  { 
    parOrdenado:[2,8],
    paresOrdenados:paresOrdenados[1],
    resultado:[],
  },
  { 
    parOrdenado:[5,8],
    paresOrdenados:paresOrdenados[1],
    resultado:[],
  },
  { 
    parOrdenado:[3,9],
    paresOrdenados:paresOrdenados[1],
    resultado:[],
  },
  { 
    parOrdenado:[3,4],
    paresOrdenados:paresOrdenados[1],
    resultado:[],
  },
  { 
    parOrdenado:[1,1],
    paresOrdenados:paresOrdenados[2],
    resultado:[[1, 1],[1,2]],
  },
  { 
    parOrdenado:[1,2],
    paresOrdenados:paresOrdenados[2],
    resultado:[[1,1]],
  },
  { 
    parOrdenado:[2,1],
    paresOrdenados:paresOrdenados[2],
    resultado:[[2,1],[2,2]],
  },
  { 
    parOrdenado:[1,1],
    paresOrdenados:paresOrdenados[3],
    resultado:[[1,1],[1,2]],
  },
  { 
    parOrdenado:[1,2],
    paresOrdenados:paresOrdenados[3],
    resultado:[[1,1],[1,2]],
  },
  { 
    parOrdenado:[2,1],
    paresOrdenados:paresOrdenados[3],
    resultado:[[2,1], [2,2]],
  },
  { 
    parOrdenado:[2,2],
    paresOrdenados:paresOrdenados[3],
    resultado:[[2,1], [2,2]],
  },
  { 
    parOrdenado:[3,4],
    paresOrdenados:paresOrdenados[3],
    resultado:[[3,1],[3,4]],
  },
  { 
    parOrdenado:[4,1],
    paresOrdenados:paresOrdenados[3],
    resultado:[[4,1], [4,2]],
  },
  { 
    parOrdenado:[4,1],
    paresOrdenados:paresOrdenados[3],
    resultado:[[4,1], [4,2]],
  }

]
relaciones.forEach((dato,index)=>{
  Deno.test("relacionados "+index, () => {
    assertEquals(Opbs.relacionados(dato.parOrdenado,dato.paresOrdenados), dato.resultado);
  });
})

 relaciones3 = [
  {relacion:paresOrdenados[0],resultado:[[ 1, 1 ], [ 1, 3 ], [ 3, 1 ], [ 3, 3 ] ]},
  {relacion:paresOrdenados[1],resultado:[]},
  {relacion:paresOrdenados[2],resultado:[[1, 1],[1,2],[2,1]]},
  {relacion:paresOrdenados[3],resultado:[[1,1],[1,2],[2,1], [2,2],[3,4],[4,1]]},
  {relacion:paresOrdenados[4],resultado:[[ 1, 1 ], [ 1, 2 ],[ 1, 4 ], [ 2, 1 ],[ 2, 2 ], [ 4, 1 ],[ 4, 4 ] ]},
  {relacion:paresOrdenados[5],resultado:[ [ 3, 1 ], [ 4, 1 ], [ 4, 2 ] ]},
  {relacion:paresOrdenados[5],resultado:[[1,1], [1, 2], [1,3], [1,4], [2,2], [2,3], [2,4], [3,3], [3,4], [4,4]]},
]
relaciones3.forEach((dato,index)=>{
  Deno.test("transitivas "+index, () => {
    assertEquals(Opbs.transitivas(dato.relacion), dato.resultado);
  });
})