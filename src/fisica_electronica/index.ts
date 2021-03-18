export function resistenciasParalela(resistencias:number[]):number{
    if(resistencias.length>1){
        return resistencias.reduce((a,b)=>a*b) /resistencias.reduce((a,b)=>a+b)
    }
    return resistencias[0]
}

