 export interface Punto {
     x:number
     y:number
 }
 export interface linea {
     puntoA:Punto,
     puntoB:Punto
 }
 export function medirDistanciaDospuntos(punto1:Punto,punto2:Punto):number{
   let  deltaX:number = punto2.x-punto1.x
   let  deltaY:number = punto2.y-punto1.y
    let distancia:number = Math.sqrt(Math.pow(deltaX,2)+Math.pow(deltaY,2))
    return distancia
 }
 export function puntoMedio(punto1:Punto,punto2:Punto):number[]{
    let  deltaX:number = punto2.x+punto1.x
   let  deltaY:number = punto2.y+punto1.y
    return[deltaX/2,deltaY/2]
 }
 export function medirDistanciaVariosPuntos(puntos:Punto[]){
    let distancia:number= 0 
    for (let index = 0; index < puntos.length-1; index++) {
        distancia += medirDistanciaDospuntos(puntos[index],puntos[index+1]) 
        console.log(distancia)     
     }
     return distancia
 }
 export interface PropiedadesLinea {
    linea:linea
    distancia:number
 }
 export function ladoMayor(lineas:linea[]){
   let propiedadesLinea:PropiedadesLinea={
      linea:{puntoA:{x:0,y:0},puntoB:{x:0,y:0}},
      distancia:0
   };
   for (let index = 0; index < lineas.length; index++) {
      let distanciaMedida:number = medirDistanciaDospuntos(lineas[index].puntoA,lineas[index].puntoB)
      if(propiedadesLinea.distancia <  distanciaMedida){
         propiedadesLinea.linea= lineas[index]
         propiedadesLinea.distancia = distanciaMedida
      }
   }
   return propiedadesLinea
 }
 export function saber_si_es_triangulo_rectangulo(lineas:linea[]):boolean{
   let _ladoMayor:PropiedadesLinea = ladoMayor(lineas)
   let ladosMenores:linea[] = lineas.filter((lado)=> _ladoMayor.distancia != medirDistanciaDospuntos(lado.puntoA,lado.puntoB) )
   return Math.pow(_ladoMayor.distancia,2)==Math.pow(medirDistanciaDospuntos(ladosMenores[0].puntoA,ladosMenores[0].puntoB),2)+Math.pow(medirDistanciaDospuntos(ladosMenores[1].puntoA,ladosMenores[1].puntoB),2)
}
export function conteo_lados_iguales(linea:linea[]):number{
   let conteoLadosIguales = 0;
   for (let index = 0; index < linea.length; index++) {
      let lado1:number = medirDistanciaDospuntos(linea[index].puntoA,linea[index].puntoB)
      for (let indexOtro = 0; indexOtro < linea.length; indexOtro++) {         
         if(index != indexOtro){
            let lado2:number = medirDistanciaDospuntos(linea[indexOtro].puntoA,linea[indexOtro].puntoB)
            if(lado1 == lado2){
               conteoLadosIguales++
            }
         }
      }  
      if(conteoLadosIguales>2){
         break
      }
   }
   return conteoLadosIguales
}
export interface AreaTrapecio{
    lineaB:linea
    lineab:linea
    lineah:linea
 }
 export function areaTrapecio(B:number,b:number,h:number):number{
    return (B+b)*h/2
 }
 export function areaTrapecioPuntos(lineaB:linea,lineab:linea,lineah:linea):number{
    let distanciaB:number = medirDistanciaDospuntos(lineaB.puntoA,lineaB.puntoB);
    let distanciab:number = medirDistanciaDospuntos(lineab.puntoA,lineab.puntoB);
    let distanciah:number = medirDistanciaDospuntos(lineah.puntoA,lineah.puntoB);
    return areaTrapecio(distanciaB,distanciab,distanciah)
 }

 export function areaCuadradoPuntos(lineab:linea,lineah:linea):number{
    let distanciab:number = medirDistanciaDospuntos(lineab.puntoA,lineab.puntoB);
    let distanciah:number = medirDistanciaDospuntos(lineah.puntoA,lineah.puntoB);
    return distanciab *distanciah;
 }

 export function areaTrianguloPuntos(lineab:linea,lineah:linea):number{
    return areaCuadradoPuntos(lineab,lineah)/2
 }
 export function areaCirculo(radio:number):number{
    return Math.PI*Math.pow(radio,2)
 }
 export function perimetroCirculo(radio:number):number{
    return 2*Math.PI*radio
 }
 export function perimetroCirculoPuntos(radio:linea):number{
   return perimetroCirculo(medirDistanciaDospuntos(radio.puntoA,radio.puntoB))
}
 export function areaCirculoPuntos(centro:Punto,puntoRadio:Punto):number{
   return areaCirculo(medirDistanciaDospuntos(centro,puntoRadio))
}
export function areaPoligonoRegular(perimetro:number,apotema:number):number{
   return perimetro*apotema/2
}
export function areaPoligonoRegularPuntos(perimetro:Punto[],apotema:linea){
   
   return areaPoligonoRegular(medirDistanciaVariosPuntos(perimetro),medirDistanciaDospuntos(apotema.puntoA,apotema.puntoB))
}
 export interface DistanciaDelCentro{
    distancia:number
    punto:Punto
 }
export function encontrarPuntoMasCercano(centro:Punto,puntos:Punto[]):DistanciaDelCentro{
   let distanciasDelCentro:DistanciaDelCentro[]=puntos.map((punto)=>{
      let distanciaDelCentro:DistanciaDelCentro={
         distancia:medirDistanciaDospuntos(centro,punto),
         punto:punto
      }
      return distanciaDelCentro;
   })
   let distanciaMenor:DistanciaDelCentro=distanciasDelCentro[0]
   distanciasDelCentro.forEach((distanciaDelCentro)=>{
      if(distanciaDelCentro.distancia < distanciaMenor.distancia ){
          distanciaMenor=distanciaDelCentro
      }
   })
   return distanciaMenor;
}