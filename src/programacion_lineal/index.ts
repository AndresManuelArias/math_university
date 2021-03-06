export function cambiarPosicionObjetos(matriz:number[][],numeroFilaDe:number,numeroFilaA:number):number[][]{
   matriz.splice(numeroFilaA, 1, matriz.splice(numeroFilaDe, 1, matriz[numeroFilaA])[0]);
   return matriz;
}
export function ordenarMatriz(matriz:number[][]):number[][]{
   let nuevaMatriz:number[][]  = [];
   let numeroFilas:number[]= [...Array(matriz.length).keys()]
   let numeroColumnas:number[]= [...Array(matriz[0].length).keys()]
   let position = 0
   numeroColumnas.forEach(c=>{
      numeroFilas.forEach((f)=>{
         if(Math.abs(matriz[f][c])==1){
            cambiarPosicionObjetos(matriz,f,position)
             
         }
         // console.log("matriz",matriz,position)
      })
      position++
   })

   return matriz
}
export function metodoGaustJordan(matriz:number[][]):number[][]{
   let nuevaMatriz:number[][] =  metodoGaust(matriz);
   [...Array(matriz.length-1).keys()].map(n=>n+1).forEach((indice)=>{
      // console.log(indice)
      // let indice = 1
      let numeroSegundaFilaPrimeraColumna:number= -1* nuevaMatriz[0][indice];
      console.log("numeroSegundaFilaPrimeraColumna",numeroSegundaFilaPrimeraColumna)
      let agarrandoPrimeraFilaSegundaFila:number[][] = intercambiarFilasPorColumnas([nuevaMatriz[0],nuevaMatriz[indice]])
      console.log("agarrandoPrimeraFilaSegundaFila",agarrandoPrimeraFilaSegundaFila)
      let convirtiendoPrimeraFilaSegundaFila:number[]= agarrandoPrimeraFilaSegundaFila.map(c=> numeroSegundaFilaPrimeraColumna*c[1]+c[0])   
      console.log("convirtiendoPrimeraFilaSegundaFila",convirtiendoPrimeraFilaSegundaFila)
      let conseguirPrimerCeroSegundaFilaPrimeraColumna:number[][]= nuevaMatriz.map((f,i)=>i==0?convirtiendoPrimeraFilaSegundaFila:f )
      console.log("conseguirPrimerCeroSegundaFilaPrimeraColumna",conseguirPrimerCeroSegundaFilaPrimeraColumna)
      nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna 
   })
   let indice = 2
   let numeroSegundaFilaPrimeraColumna:number= -1* nuevaMatriz[1][indice];
   console.log("numeroSegundaFilaPrimeraColumna",numeroSegundaFilaPrimeraColumna)
   let agarrandoPrimeraFilaSegundaFila:number[][] = intercambiarFilasPorColumnas([nuevaMatriz[1],nuevaMatriz[indice]])
   console.log("agarrandoPrimeraFilaSegundaFila",agarrandoPrimeraFilaSegundaFila)
   let convirtiendoPrimeraFilaSegundaFila:number[]= agarrandoPrimeraFilaSegundaFila.map(c=> numeroSegundaFilaPrimeraColumna*c[1]+c[0])   
   console.log("convirtiendoPrimeraFilaSegundaFila",convirtiendoPrimeraFilaSegundaFila)
   let conseguirPrimerCeroSegundaFilaPrimeraColumna:number[][]= nuevaMatriz.map((f,i)=>i==1?convirtiendoPrimeraFilaSegundaFila:f )
   console.log("conseguirPrimerCeroSegundaFilaPrimeraColumna ",conseguirPrimerCeroSegundaFilaPrimeraColumna)
   nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna 
  return nuevaMatriz
}
export function metodoGaust(matriz:number[][]):number[][]{
   console.log("matriz entra",matriz)
   // https://www.youtube.com/watch?v=x7y6bDvpStA&list=TLPQMDkwMjIwMjGM-EK8V9-FEw&index=10
   let ordenarPrimeraFilaMenorAMayor:number[][]=ordenarMatriz(matriz) // convertir en uno el primer numero
   console.log("ordenarPrimeraFilaMenorAMayor",ordenarPrimeraFilaMenorAMayor)
   let primerNumero:number = ordenarPrimeraFilaMenorAMayor[0][0]
   let convertirUnoPrimerNumero:number[][] = matriz.map((f,i)=>i==0?f.map(n1=> n1/primerNumero):f )
    console.log("convertirUnoPrimerNumero",convertirUnoPrimerNumero)
   let nuevaMatriz:number[][]  = convertirUnoPrimerNumero;
   [...Array(matriz.length-1).keys()].map(n=>n+1).forEach((indice)=>{
      // console.log(indice)
      let numeroSegundaFilaPrimeraColumna:number= -1* nuevaMatriz[indice][0];
      console.log("numeroSegundaFilaPrimeraColumna",numeroSegundaFilaPrimeraColumna)
      let agarrandoPrimeraFilaSegundaFila:number[][] = intercambiarFilasPorColumnas([nuevaMatriz[0],nuevaMatriz[indice]])
      console.log("agarrandoPrimeraFilaSegundaFila",agarrandoPrimeraFilaSegundaFila)
      let convirtiendoPrimeraFilaSegundaFila:number[]= agarrandoPrimeraFilaSegundaFila.map(c=> numeroSegundaFilaPrimeraColumna*c[0]+c[1])   
      console.log("convirtiendoPrimeraFilaSegundaFila",convirtiendoPrimeraFilaSegundaFila)
      let conseguirPrimerCeroSegundaFilaPrimeraColumna:number[][]= nuevaMatriz.map((f,i)=>i==indice?convirtiendoPrimeraFilaSegundaFila:f )
      console.log("conseguirPrimerCeroSegundaFilaPrimeraColumna",conseguirPrimerCeroSegundaFilaPrimeraColumna)
      nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna 
   })
   let segundoNumero:number = nuevaMatriz[1][1]
   // console.log(nuevaMatriz);
   
   console.log("segundoNumero",segundoNumero)
   let convertirUnoSegundoNumero:number[][] = nuevaMatriz.map((f,i)=>i==1?f.map(n1=> n1/segundoNumero):f )
   console.log("convertirUnoSegundoNumero",convertirUnoSegundoNumero)
   nuevaMatriz = convertirUnoSegundoNumero;
   let indice = 2
   let numeroSegundaFilaPrimeraColumna:number= -1* nuevaMatriz[indice][1];
   console.log("numeroSegundaFilaPrimeraColumna",numeroSegundaFilaPrimeraColumna)
   let agarrandoPrimeraFilaSegundaFila:number[][] = intercambiarFilasPorColumnas([nuevaMatriz[1],nuevaMatriz[indice]])
   console.log("agarrandoPrimeraFilaSegundaFila",agarrandoPrimeraFilaSegundaFila)
   let convirtiendoPrimeraFilaSegundaFila:number[]= agarrandoPrimeraFilaSegundaFila.map(c=> numeroSegundaFilaPrimeraColumna*c[0]+c[1])   
   console.log("convirtiendoPrimeraFilaSegundaFila",convirtiendoPrimeraFilaSegundaFila)
   let conseguirPrimerCeroSegundaFilaPrimeraColumna:number[][]= nuevaMatriz.map((f,i)=>i==indice?convirtiendoPrimeraFilaSegundaFila:f )
   console.log("conseguirPrimerCeroSegundaFilaPrimeraColumna",conseguirPrimerCeroSegundaFilaPrimeraColumna)
   nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna 
   let tercerNumero:number = nuevaMatriz[2][2]
   console.log("tercerNumero",tercerNumero)
   let convertirUnoTercerNumero:number[][] = nuevaMatriz.map((f,i)=>i==2?f.map(n1=> n1/tercerNumero):f )
   console.log("convertirUnoTercerNumero",convertirUnoTercerNumero)
   nuevaMatriz = convertirUnoTercerNumero;
   console.log("termina gaust")
   // console.log(nuevaMatriz);
/*
   let numeroSegundaFilaPrimeraColumna:number= -1* convertirUnoPrimerNumero[1][0];
   let agarrandoPrimeraFilaSegundaFila:number[][] = intercambiarFilasPorColumnas([convertirUnoPrimerNumero[0],convertirUnoPrimerNumero[1]])
   let convirtiendoPrimeraFilaSegundaFila:number[]= agarrandoPrimeraFilaSegundaFila.map(c=> numeroSegundaFilaPrimeraColumna*c[0]+c[1])   
   let conseguirPrimerCeroSegundaFilaPrimeraColumna:number[][]= convertirUnoPrimerNumero.map((f,i)=>i==1?convirtiendoPrimeraFilaSegundaFila:f )
   
   let numeroTerceraFilaPrimeraColumna:number= -1* conseguirPrimerCeroSegundaFilaPrimeraColumna[2][0];
   let agarrandoPrimeraFilaTerceraFila:number[][] = intercambiarFilasPorColumnas([conseguirPrimerCeroSegundaFilaPrimeraColumna[0],conseguirPrimerCeroSegundaFilaPrimeraColumna[2]])
   let convirtiendoPrimeraFilaTerceraFila:number[]= agarrandoPrimeraFilaTerceraFila.map(c=> numeroTerceraFilaPrimeraColumna*c[0]+c[1])   
   let conseguirSegundoCeroTerceraFilaPrimeraColumna:number[][]= conseguirPrimerCeroSegundaFilaPrimeraColumna.map((f,i)=>i==2?convirtiendoPrimeraFilaTerceraFila:f )
  */ 
   return   nuevaMatriz
}

export function convertirEnCeroIndiceSeleccionado(matriz:number[][],indice:[number,number]):number[][]{
//    let matrizIntercambiada:number[][] =  intercambiarFilasPorColumnas(matriz)
//    let operacion:any;
//    if(matrizIntercambiada[indice[0]].some(c=>c))
//   return matriz.map((f,i)=> indice[0] == i?convertido:f) 
   return matriz
}
export function intercambiarFilasPorColumnas(matriz:number[][]):number[][]{
   let unirfila1yfilaMap:Map<number,number[]>= new Map<number,number[]>()
   matriz[0].forEach((c:number,i:number)=>{// intercambiar filas por columnas
      let coleccionFila:number[] = []
      matriz.forEach((f:number[])=>{
         coleccionFila.push(f[i])
      })
      unirfila1yfilaMap.set(i,coleccionFila)
  })
  return [...unirfila1yfilaMap.values()]
}
export function encontrarCero2x2(matriz2x2:number[][]):any{
  let primeraFila:number[]= matriz2x2[0];
  let segundaFila:number[]= matriz2x2[1];
  let unirfila1yfila2Map:Map<number,number[]>= new Map<number,number[]>()
  
  matriz2x2[0].forEach((c:number,i:number)=>{
      let coleccionFila:number[] = []
      matriz2x2.forEach((f:number[])=>{
         coleccionFila.push(f[i])
      })
      unirfila1yfila2Map.set(i,coleccionFila)
  })
  let unirfila1yfila2:number[][] =  [...unirfila1yfila2Map.values()]
   let restaDeColumnas:number[] = []
   for (let [key, value] of unirfila1yfila2Map.entries()) {
      console.log(key + ' = ' + value)
      unirfila1yfila2.map((f:number[])=> f.reduce((a:number,b:number)=>a-b))

   }
//   unirfila1yfila2.forEach((n:number)=>{
//    unirfila1yfila2.map((f:number[])=> f.reduce((a:number,b:number)=>a-b))
//   })
  let convertidoCeroF1:number[] = matriz2x2.map((f1,i)=> segundaFila[0]) 
//   let convertidoCeroF2:number[] = matriz2x2.map((c,i)=> c) 
  return restaDeColumnas

}

export function  GaussJordan2X2(matriz2x2:[[number,number,number],[number,number,number]]):[[number,number,number],[number,number,number]]{
   return [[1,2,3],[1,3,4]]
}

export interface Ecuation {
   x:number[]
   sol:number
}

export interface VariableSimple{
   z:Ecuation
   ecuations:Ecuation[]
}
/**
 x = indice de x
 n = valor resultado
 */
export interface solucionesX{
   c:number
   f:number
}
export interface solucionSimples{
   x:solucionesX[]
   z:number
}
function generarMatrizUnosCeros(longitud:number):number[][]{
   let element:number[][] = []
   for (let fila = 0; fila < longitud; fila++) {
      let crearColumnas:number[] = []
      for (let columna = 0; columna < longitud; columna++) {
         if(fila == columna){
            crearColumnas.push(1)
         }else{
            crearColumnas.push(0)
         }
      }
      element.push(crearColumnas)
   }
   return element
}
function transformarInecuacionAEcuacion(matrix:VariableSimple):number[][]{
   let nuevaMatriz:number[][] = [matrix.z.x].concat(matrix.ecuations.map(x=>x.x))
   let nuevaMatrizSol:number[] = [matrix.z.sol].concat(matrix.ecuations.map(x=>x.sol))
   let convertirInecuacionAecuacion:number[][]= generarMatrizUnosCeros(matrix.ecuations.length+1)
   .map((fila,indice)=> nuevaMatriz[indice].concat(fila).concat(nuevaMatrizSol[indice]) )
   // console.log({convertirInecuacionAecuacion})
   return convertirInecuacionAecuacion
}
export interface icolumPivote {x:solucionesX,nuevaTabla:number[][]}
export function columnaPivoteYiteracionSimplexprimal(convertirInecuacionAecuacion:number[][]):icolumPivote{
   let minColumna:number =  Math.min(... convertirInecuacionAecuacion[0])
   let indexColumnaPivote:number = convertirInecuacionAecuacion[0].findIndex(fila=>fila==minColumna)
   let valoresColumnaPivote:number[]= convertirInecuacionAecuacion.slice(1).map(fila=>fila.slice(indexColumnaPivote)[0])
   let valoresR:number[] = convertirInecuacionAecuacion.slice(1).map((fila,index)=>fila.slice(-1)[0]/valoresColumnaPivote[index])
   let valorMenorR:number =  valoresR.filter(f=>f>0).reduce((a,b)=>Math.min(a,b))
   let indexFilaPivote:number =  valoresR.findIndex(dato=>dato==valorMenorR)+1
   let numeroDividir:number = convertirInecuacionAecuacion[indexFilaPivote][indexColumnaPivote]
   console.log({numeroDividir})
   let filaConvertida:number[] = convertirInecuacionAecuacion[indexFilaPivote].map(fila=>fila/numeroDividir)
   console.log({filaConvertida})
   // let nuevaFilaZ:number[]= filaConvertida.map((dato,index)=>dato*minColumna*-1+convertirInecuacionAecuacion[0][index])
   let nuevaTabla:number[][]= convertirInecuacionAecuacion.map((filaAnterior,indexFila)=>{
      if(indexFila==indexFilaPivote){
         return filaConvertida
      }else{
         return filaConvertida.map((dato,indexColumna)=> -1*filaAnterior[indexColumnaPivote]*dato+filaAnterior[indexColumna])
      }

   })
   

   let x:solucionesX = {
     c: indexColumnaPivote,
     f: indexFilaPivote
   }
    return {x,nuevaTabla}
}
export interface resulMetodoSimplexPrimal {matrix:number[][],colectionCol:number[],solucion:solucionSimples}
export function metodoSimplexprimal(matrix:VariableSimple):resulMetodoSimplexPrimal{//https://www.youtube.com/watch?v=fhZxbcFNH5Y
   let convertirInecuacionAecuacion:number[][]= transformarInecuacionAEcuacion(matrix)
   let coleccionIndexColumnaPivote:solucionesX[]=[]
   while (convertirInecuacionAecuacion[0].some(columna=>columna<0)) {
      let {x,nuevaTabla} = columnaPivoteYiteracionSimplexprimal(convertirInecuacionAecuacion)
      console.log({x,nuevaTabla});      
      coleccionIndexColumnaPivote.push(x)
      convertirInecuacionAecuacion = nuevaTabla
   }
   // let convertidoMatrix:any[] =   matrix.map((x:any)=>Object.values(x))
   // return convertidoMatrix
   console.log({coleccionIndexColumnaPivote})
   let quitarFilasSobrePuestas = [...new Map(coleccionIndexColumnaPivote.map(a=>[a.f,a.c]))].map(a=>{ return {c:a[1],f:a[0]}})
   console.log({quitarFilasSobrePuestas})
   coleccionIndexColumnaPivote=quitarFilasSobrePuestas
   convertirInecuacionAecuacion =  convertirInecuacionAecuacion.map(fila=>fila.map(columna=> Math.round((columna + Number.EPSILON) * 100) / 100))
   let solucionX:solucionesX[] = coleccionIndexColumnaPivote.map((s:solucionesX)=>  { return {c:s.c,f:convertirInecuacionAecuacion[s.f].slice(-1)[0]}} )
   solucionX.sort((a,b)=>a.c-b.c)
   let  _solucionSimples:solucionSimples = {z:convertirInecuacionAecuacion[0].slice(-1)[0],x:solucionX}

   return{ matrix:convertirInecuacionAecuacion,colectionCol:solucionX.map(x=>x.c).sort(),solucion:_solucionSimples}
}

export function metodoSimplexDual(matrix:VariableSimple):resulMetodoSimplexPrimal{//https://www.youtube.com/watch?v=R6qj-A6VXvQ
   let convertirInecuacionAecuacion:number[][]= transformarInecuacionAEcuacion(matrix)
   console.table(convertirInecuacionAecuacion)
   let primerUnoMatrizZ  = convertirInecuacionAecuacion[0].lastIndexOf(1)
   console.log({primerUnoMatrizZ})
   // convertirInecuacionAecuacion.map(f=> f.splice(primerUnoMatrizZ,1))
   console.table(convertirInecuacionAecuacion)
   let coleccionIndexColumnaPivote:solucionesX[]=[]
   let interaccion:number = 0;
   while (convertirInecuacionAecuacion[0].slice(0,convertirInecuacionAecuacion[0].length-1).filter((f,i)=>primerUnoMatrizZ!=i).some(columna=>columna>0) || convertirInecuacionAecuacion.some(columna=>columna.slice(-1)[0]<0)) {
      console.log({interaccion})
      let {x,nuevaTabla} = columnaPivoteYiteracionSimplexDual(convertirInecuacionAecuacion,primerUnoMatrizZ)
      console.log({x});    
      console.table(nuevaTabla)
      coleccionIndexColumnaPivote.push(x)
      convertirInecuacionAecuacion = nuevaTabla
      interaccion++;
      // if(interaccion ==4) break
   }
   // let convertidoMatrix:any[] =   matrix.map((x:any)=>Object.values(x))
   // return convertidoMatrix
   console.log({coleccionIndexColumnaPivote})
   let quitarFilasSobrePuestas = [...new Map(coleccionIndexColumnaPivote.map(a=>[a.f,a.c]))].map(a=>{ return {c:a[1],f:a[0]}})
   console.log({quitarFilasSobrePuestas})
   coleccionIndexColumnaPivote=quitarFilasSobrePuestas
   let convertirInecuacionAecuacionRedondeo =  convertirInecuacionAecuacion.map(fila=>fila.map(columna=> Math.round((columna + Number.EPSILON) * 100) / 100))
   console.table(convertirInecuacionAecuacionRedondeo)
   let solucionX:solucionesX[] = coleccionIndexColumnaPivote.map((s:solucionesX)=>  { return {c:s.c,f:convertirInecuacionAecuacionRedondeo[s.f].slice(-1)[0]}} )
   solucionX.sort((a,b)=>a.c-b.c)
   let  _solucionSimples:solucionSimples = {z:convertirInecuacionAecuacionRedondeo[0].slice(-1)[0],x:solucionX}

   return{ matrix:convertirInecuacionAecuacionRedondeo,colectionCol:solucionX.map(x=>x.c).sort(),solucion:_solucionSimples}
}
export function columnaPivoteYiteracionSimplexDual(convertirInecuacionAecuacion:number[][],primerUnoMatrizZ:number=convertirInecuacionAecuacion[0].lastIndexOf(1)):icolumPivote{
   console.log({primerUnoMatrizZ})
   let columnaResultado:number[] = convertirInecuacionAecuacion.flatMap (f=>f.slice(-1))
   let minResultado:number =  Math.min(... columnaResultado)
   console.log({minResultado})
   let indexFilaPivote:number = columnaResultado.findIndex(fila=>fila==minResultado)
   console.log({indexFilaPivote})
   let valoresFilaPivote:number[]= convertirInecuacionAecuacion[indexFilaPivote]//.slice(1).map(fila=>fila.slice(indexColumnaPivote)[0])
   console.log({valoresFilaPivote})
   let valoresZ:number[] = convertirInecuacionAecuacion[0].slice(0,convertirInecuacionAecuacion[0].length-1).map((fila,index)=>fila/valoresFilaPivote[index])
   console.log({valoresZ})
   let valorMenorZ:number =  valoresZ.filter(f=>!Number.isNaN( f) && f !== Infinity && f !== -Infinity && f >0).filter(f=>f!==0).reduce((a,b)=>Math.min(a,b))
   console.log({valorMenorZ})
   let indexColumnaPivote:number =  valoresZ.findIndex((fila)=>fila==valorMenorZ)
   console.log({indexColumnaPivote})
   let numeroDividir:number = convertirInecuacionAecuacion[indexFilaPivote][indexColumnaPivote]
   console.log({numeroDividir})
   let filaConvertida:number[] = convertirInecuacionAecuacion[indexFilaPivote].map(fila=> fila/numeroDividir)
   console.log({filaConvertida})
   let nuevaTabla:number[][]= convertirInecuacionAecuacion.map((filaAnterior,indexFila)=>{
      if(indexFila==indexFilaPivote){
         return filaConvertida
      }else{
         return filaConvertida.map((datoFilaConvertida,indexColumna)=>{
           // console.log(`indexColumna:${indexColumna}: -1*${filaAnterior[indexColumnaPivote]}*${datoFilaConvertida}+${filaAnterior[indexColumna]}`)
            return -1*filaAnterior[indexColumnaPivote]*datoFilaConvertida+filaAnterior[indexColumna]})
      }

   })
   console.table(nuevaTabla)

   let x:solucionesX = {
     c: indexColumnaPivote,
     f: indexFilaPivote
   }
    return {x,nuevaTabla}
}