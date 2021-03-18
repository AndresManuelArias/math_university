import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import * as NotacionSigma from "../../src/geometria_analitica/NotacionSigma/NotacionSigma.ts"
let notacionSigma = new NotacionSigma.NotacionSigma()

/*
(async function(){
             geometria_analitica =  await import('../geometria_analitica/index.ts')
        })()
*/
interface datosProbar {
    valores:number[]
    operacion:(n:number)=>number
    resultados:number|number[]|any;
}
let probar:datosProbar[] = [
    {valores:[0,5],resultados:[11632896,103]
        ,operacion:function(i){
        return 8+i*i
    }},
    {valores:[1,7],resultados:[645120,56]
        ,operacion:function(i){
        return 2*i
    }}
]


probar.forEach((data:datosProbar,index)=>{
    Deno.test(`productoria ${index}`, () => {
        let productoria = notacionSigma.productoria(data.valores[0],data.valores[1])
        assertEquals(productoria(data.operacion),data.resultados[0])
    });
    Deno.test(`sumatoria ${index}`, () => {
        let sumatoria = notacionSigma.sumatoria(data.valores[0],data.valores[1])
        assertEquals(sumatoria(data.operacion),data.resultados[1])
    });
})