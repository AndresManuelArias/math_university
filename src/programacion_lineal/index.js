function cambiarPosicionObjetos1(matriz, numeroFilaDe, numeroFilaA) {
    matriz.splice(numeroFilaA, 1, matriz.splice(numeroFilaDe, 1, matriz[numeroFilaA])[0]);
    return matriz;
}
export { cambiarPosicionObjetos1 as cambiarPosicionObjetos };
function ordenarMatriz1(matriz) {
    let nuevaMatriz = [];
    let numeroFilas = [
        ...Array(matriz.length).keys()
    ];
    let numeroColumnas = [
        ...Array(matriz[0].length).keys()
    ];
    let position = 0;
    numeroColumnas.forEach((c)=>{
        numeroFilas.forEach((f)=>{
            if (Math.abs(matriz[f][c]) == 1) {
                matriz.splice(position, 1, matriz.splice(f, 1, matriz[f])[0]);
                position++;
            }
        });
    });
    return matriz;
}
export { ordenarMatriz1 as ordenarMatriz };
function metodoGaust1(matriz) {
    let ordenarPrimeraFilaMenorAMayor = ordenarMatriz1(matriz);
    let primerNumero = ordenarPrimeraFilaMenorAMayor[0][0];
    let convertirUnoPrimerNumero = matriz.map((f, i)=>i == 0 ? f.map((n1)=>n1 / primerNumero
        ) : f
    );
    let nuevaMatriz = convertirUnoPrimerNumero;
    [
        ...Array(matriz.length - 1).keys()
    ].map((n)=>n + 1
    ).forEach((indice)=>{
        let numeroSegundaFilaPrimeraColumna = -1 * nuevaMatriz[indice][0];
        let agarrandoPrimeraFilaSegundaFila = intercambiarFilasPorColumnas1([
            nuevaMatriz[0],
            nuevaMatriz[indice]
        ]);
        let convirtiendoPrimeraFilaSegundaFila = agarrandoPrimeraFilaSegundaFila.map((c)=>numeroSegundaFilaPrimeraColumna * c[0] + c[1]
        );
        let conseguirPrimerCeroSegundaFilaPrimeraColumna = nuevaMatriz.map((f, i)=>i == indice ? convirtiendoPrimeraFilaSegundaFila : f
        );
        nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna;
    });
    let segundoNumero = nuevaMatriz[1][1];
    let convertirUnoSegundoNumero = nuevaMatriz.map((f, i)=>i == 1 ? f.map((n1)=>n1 / segundoNumero
        ) : f
    );
    nuevaMatriz = convertirUnoSegundoNumero;
    let indice = 2;
    let numeroSegundaFilaPrimeraColumna = -1 * nuevaMatriz[indice][1];
    let agarrandoPrimeraFilaSegundaFila = intercambiarFilasPorColumnas1([
        nuevaMatriz[1],
        nuevaMatriz[indice]
    ]);
    let convirtiendoPrimeraFilaSegundaFila = agarrandoPrimeraFilaSegundaFila.map((c)=>numeroSegundaFilaPrimeraColumna * c[0] + c[1]
    );
    let conseguirPrimerCeroSegundaFilaPrimeraColumna = nuevaMatriz.map((f, i)=>i == indice ? convirtiendoPrimeraFilaSegundaFila : f
    );
    nuevaMatriz = conseguirPrimerCeroSegundaFilaPrimeraColumna;
    return nuevaMatriz;
}
export { metodoGaust1 as metodoGaust };
function convertirEnCeroIndiceSeleccionado1(matriz, indice) {
    return matriz;
}
export { convertirEnCeroIndiceSeleccionado1 as convertirEnCeroIndiceSeleccionado };
function intercambiarFilasPorColumnas1(matriz) {
    let unirfila1yfilaMap = new Map();
    matriz[0].forEach((c, i)=>{
        let coleccionFila = [];
        matriz.forEach((f)=>{
            coleccionFila.push(f[i]);
        });
        unirfila1yfilaMap.set(i, coleccionFila);
    });
    return [
        ...unirfila1yfilaMap.values()
    ];
}
export { intercambiarFilasPorColumnas1 as intercambiarFilasPorColumnas };
function encontrarCero2x21(matriz2x2) {
    let primeraFila = matriz2x2[0];
    let segundaFila = matriz2x2[1];
    let unirfila1yfila2Map = new Map();
    matriz2x2[0].forEach((c, i)=>{
        let coleccionFila = [];
        matriz2x2.forEach((f)=>{
            coleccionFila.push(f[i]);
        });
        unirfila1yfila2Map.set(i, coleccionFila);
    });
    let unirfila1yfila2 = [
        ...unirfila1yfila2Map.values()
    ];
    let restaDeColumnas = [];
    for (let [key, value] of unirfila1yfila2Map.entries()){
        console.log(key + ' = ' + value);
        unirfila1yfila2.map((f)=>f.reduce((a, b)=>a - b
            )
        );
    }
    let convertidoCeroF1 = matriz2x2.map((f1, i)=>segundaFila[0]
    );
    return restaDeColumnas;
}
export { encontrarCero2x21 as encontrarCero2x2 };
function GaussJordan2X21(matriz2x2) {
    return [
        [
            1,
            2,
            3
        ],
        [
            1,
            3,
            4
        ]
    ];
}
export { GaussJordan2X21 as GaussJordan2X2 };
