function randomParEImpar(numeroRandom) {
    var arrayImpares = [];
    var arrayPares = [];
    if (numeroRandom % 2 !== 0) {
        arrayImpares.push(numeroRandom);
        console.log(arrayImpares + ' Es impar');
    } else {
        arrayPares.push(numeroRandom);
        console.log(arrayPares + ' Es par');
    };
};

// Llamo a la función con la fórmula del ejercicio anterior

randomParEImpar(Math.floor((Math.random() * 100) + 1));