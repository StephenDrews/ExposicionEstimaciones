// Datos de ejemplo para la altura de los estudiantes en centímetros
const alturasEstudiantes = [160, 155, 170, 165, 175, 150, 180, 145, 185, 140];


//Funcion de trar la interaccion dinamica del html,
function calcularEstimacion() {
    const alturasInput = document.getElementById('alturas');
    const alturas = alturasInput.value.split(',').map(Number);
    
    const estimacionIntervaloAltura = calcularEstimacionIntervaloAltura(alturas);

    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <p>Estimación por Intervalos para Altura Promedio:</p>
        <p>Mínimos Cuadrados: ${estimacionIntervaloAltura.minimosCuadrados}</p>
        <p>Máxima Verosimilitud: ${estimacionIntervaloAltura.maximaVerosimilitud}</p>
        <p>Estimación Bayesiana: ${estimacionIntervaloAltura.bayesiana}</p>
        <p>Bootstrapping: ${estimacionIntervaloAltura.bootstrapping}</p>
    `;
}


// Función para calcular la estimación por intervalos para la altura promedio utilizando diferentes métodos
function calcularEstimacionIntervaloAltura(alturas) {
    // Implementar el cálculo para cada método de estimación aquí
    const estimacionMinimosCuadrados = estimarMinimosCuadrados(alturas);
    const estimacionMaximaVerosimilitud = estimarMaximaVerosimilitud(alturas);
    const estimacionBayesiana = estimarBayesiana(alturas);
    const estimacionBootstrapping = estimarBootstrapping(alturas);

    //Devuelva los valores de cada variables
    return {
        minimosCuadrados: estimacionMinimosCuadrados,
        maximaVerosimilitud: estimacionMaximaVerosimilitud,
        bayesiana: estimacionBayesiana,
        bootstrapping: estimacionBootstrapping
    };
}

// Función para estimar la altura promedio utilizando el método de mínimos cuadrados
function estimarMinimosCuadrados(alturas) {
    // Implementar el método de estimación por mínimos cuadrados aquí
    const mediaAlturas = alturas.reduce((acc, altura) => acc + altura, 0) / alturas.length;
    /*
    Math.sqrt() --> Calcula la raiz cuadrada de un numero
    Se usa para calcular las desviacion estándar de un conjunto de datos. 
    La desviación estándar se define como la raíz cuadrada de la varianza, y 
    es una medida de la dispersión de los datos alrededor de la media

    acc --> Acumulador en una función de reducción (reduce).
    Se usa como un acumulador para calcular la suma de los valores en un arreglo;  los valores de altura en cada iteración.
    
    Math.pow --> Calcula la potencia de un numero,
    Se usa calcular la varianza de un conjunto de datos. 
    La varianza se define como la suma de los cuadrados de las diferencias entre cada valor y la media, 
    dividida por el número de datos menos uno. 
    La desviación estándar se calcula a partir de la varianza utilizando la función
    */ 
    const desviacionEstandar = Math.sqrt(alturas.reduce((acc, altura) => acc + Math.pow(altura - mediaAlturas, 2), 0) / (alturas.length - 1));
    const margenError = 1.96 * (desviacionEstandar / Math.sqrt(alturas.length)); // Intervalo de confianza del 95%
    const intervaloInferior = mediaAlturas - margenError;
    const intervaloSuperior = mediaAlturas + margenError;
    return [intervaloInferior, intervaloSuperior];
}



// Función para estimar la altura promedio utilizando el método de máxima verosimilitud
// Implementación del cálculo por máxima verosimilitud
function estimarMaximaVerosimilitud(alturas) {
    
    // En este ejemplo, devolvemos un intervalo de confianza arbitrario para fines ilustrativos
    return [155, 165]; // Intervalo de confianza arbitrario
}

// Función para estimar la altura promedio utilizando el método de estimación bayesiana
// Implementación del cálculo por estimación bayesiana
function estimarBayesiana(alturas) {
     
    // En este ejemplo, devolvemos un intervalo de confianza arbitrario para fines ilustrativos
return [150, 170]; // Intervalo de confianza arbitrario
}

// Función para estimar la altura promedio utilizando el método de bootstrapping
// Implementación del cálculo por bootstrapping
function estimarBootstrapping(alturas) {
    // En este ejemplo, devolvemos un intervalo de confianza arbitrario para fines ilustrativos
return [145, 175]; // Intervalo de confianza arbitrario
}
