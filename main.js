// Creo la variabile contenente i secondi del countdown.
var countdown = 30;

// finchè il countdown non va a 0, setInterval ciclerà ogni secondo.
var timeout = setInterval(function() {

    $('#tempo_rimanente').text(countdown); //scrivendone i secondi rimanenti.
    countdown--;

    if (countdown < 0) { //Condizione che bloccherà il loop.
        clearInterval(timeout);
    }

}, 1000);


$(document).ready(function() {

    var millisecondi = 30 * 1000;

    var arrayNumbers = []; // Array che conterrà i 5 numeri vincenti.

    var numeriUtente = []; // Array che conterrà i numeri inseriti dall'utente.

    var arrayTrovati = []; // Array che riempirò con i numeri indovinati dall'utente.

    var punteggio = 0; // Variabile che conterà quanti numeri inseriti sono corretti.

// Ciclo while che riempie il vettore dei numeri vincenti con controllo che non siano uguali.
    while (arrayNumbers.length < 5) {

        var randomNumbers = getRndInteger(1, 100);

        if (arrayNumbers.includes(randomNumbers)) {

        } else {
            arrayNumbers.push(randomNumbers);

            console.log(randomNumbers);

            $('.numeri_vincenti').append('<p>' + randomNumbers + '</p>'); // Stampo in pagina il numero inserito dal pc
        }

    }

// Timeout che fa sparire i numeri dalla pagina dopo tot tempo.
    setTimeout(function() {

        $('.numeri_vincenti').hide();

    }, millisecondi + 1000);

// Timeout che imposta i secondi dopo cui l'utente deve inserir i numeri
    setTimeout(function() {

        do {
            var numberChoise =  Math.floor(parseInt(prompt('Inserisci un numero da 1 a 100')));

            if (isNaN(numberChoise)) { // Controllo che sia un numero
                alert('Devi inserire un numero.')



            } else if (numeriUtente.includes(numberChoise)) { // Controllo che il numero inserito non sia uguale ad uno precedentemente
                alert('Devi inserire solo numeri diversi fra loro')
            } else {
                numeriUtente.push(numberChoise); //Altrimenti push.

                if (arrayNumbers.includes(numberChoise)) { //Se presente nei numeri vincenti

                    punteggio++; // Aumento la variabile matchedNumbers di 1.

                    arrayTrovati.push(numberChoise); // E pusho il numero nell'array dei numeri indovinati.

                }
            }

        } while (numeriUtente.length < 5);

        // Stampa
        $('#numeri_scelti').text('I numeri da te inseriti: ' + numeriUtente)

        $('#punteggio').text('Hai totalizzato: ' + punteggio + ' punti!')

        $('#numeri_trovati').text('Hai ricordato: ' + arrayTrovati)

    }, millisecondi + 2000)

    console.log(numeriUtente);

    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

});
