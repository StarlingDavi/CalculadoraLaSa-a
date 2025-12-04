
const STANDARD_OVEN_TIME_MINUTES = 40;
const PREPARATION_TIME_PER_LAYER_MINUTES = 2; 

function calculateTimes() {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; 


    const layersInput = prompt("¿Cuántas capas de lasaña vas a preparar?");
    const ovenTimeInput = prompt("¿Cuántos minutos lleva la lasaña actualmente en el horno?");

 
    const layers = parseInt(layersInput);
    const ovenMinutesElapsed = parseInt(ovenTimeInput);

    if (isNaN(layers) || isNaN(ovenMinutesElapsed) || layers < 0 || ovenMinutesElapsed < 0 || layersInput === "" || ovenTimeInput === "") {
        resultsDiv.innerHTML = '<p class="error">Error: Por favor, ingresa valores numéricos positivos y válidos para las capas y el tiempo en el horno.</p>';
        return; 
    }

   


    function remainingOvenTime(minutesElapsed) {
        return STANDARD_OVEN_TIME_MINUTES - minutesElapsed;
    }


    function totalPreparationTime(numberOfLayers) {
        return numberOfLayers * PREPARATION_TIME_PER_LAYER_MINUTES;
    }


    function totalWorkingTime(numberOfLayers, minutesElapsed) {
        const prepTime = totalPreparationTime(numberOfLayers);
       
        return prepTime + minutesElapsed;
    }

 

    const timeRemaining = remainingOvenTime(ovenMinutesElapsed);
    const prepTotal = totalPreparationTime(layers);
    const totalWork = totalWorkingTime(layers, ovenMinutesElapsed);


    resultsDiv.innerHTML = `
        <div class="result-item"><strong>Tiempo restante en el horno:</strong> ${Math.max(0, timeRemaining)} minutos.</div>
        <div class="result-item"><strong>Tiempo total de preparación (Capas):</strong> ${prepTotal} minutos.</div>
        <div class="result-item"><strong>Tiempo total de trabajo (Lucian):</strong> ${totalWork} minutos.</div>
    `;
    }