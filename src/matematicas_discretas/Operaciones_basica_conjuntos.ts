export class Opbs {
    static diferencia(conjuntoA:number[],conjuntoB:number[]):number[]{
       return conjuntoA.filter((valueA)=>conjuntoB.every(valueB=> valueA!==valueB))
    }
    static Intersección(conjuntoA:number[],conjuntoB:number[]):number[]{
       return conjuntoA.filter((valueA)=>conjuntoB.some(valueB=> valueA==valueB))
    }
    static Union(conjuntoA:number[],conjuntoB:number[]):number[]{
      let coleccion:Set<number> =   new Set<number>();
      let union:number[] =  conjuntoB .concat(conjuntoA)
      union.forEach(element => {
        coleccion.add(element);
      });
      return [...coleccion]
    }
    static encontrarParesOrdenado(parEncontrar:number[],buscarParesEn:number[][]):number[][]{
      return buscarParesEn.filter((par:number[])=>  par[0]==parEncontrar[1] && par[1]==parEncontrar[0])
    }
    static simetricas(relacion:number[][]):number[][]{
      return relacion.filter((par:number[],index:number,buscarParesEn:number[][])=>  this.encontrarParesOrdenado(par,buscarParesEn.filter((r,i)=>i!==index)).length)
    }
    static esSimetricas(relacion:number[][]):boolean{
      return relacion.some((par:number[],index:number,buscarParesEn:number[][])=>  this.encontrarParesOrdenado(par,buscarParesEn.filter((r,i)=>i!==index)).length)
    }
    static relacionados(parEncontrar:number[],buscarParesEn:number[][]):number[][]{
      return buscarParesEn.filter((par:number[])=>   par[0]==parEncontrar[1]).map((par:number[])=> [parEncontrar[0],par[1]])
    }
    static transitivas (relacion:number[][]):number[][]{
      let relaciones:number[][] = relacion
      .flatMap((par:number[],index:number,buscarParesEn:number[][])=>  this.relacionados(par,buscarParesEn.filter((r,i)=>i!==index)))
      return relacion.filter(r1=> relaciones.some(r2=>r2[0]==r1[0] && r2[1]==r1[1] ))
    }
}

/**
 * 
  

let n = []; 

E.forEach((d2)=> { 

E.forEach((d1)=>{ 

n.push([d2,d1]) 

}) 

}) 

 

n.map((a)=> `(${a})`).join(", ") 

function imprimirCorchetes(n){
  return n.map((a)=> `(${a})`).join(", ") 
}
 */

function imprimirCorchetes(n:number[]):string{
  return n.map((a)=> `(${a})`).join(", ") 
}