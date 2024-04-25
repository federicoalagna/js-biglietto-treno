'use strict';

//Chiediamo all'utente il numero di km che dovrà fare e la sua età

//--definisco una variabile numero-km e salvo il valore di un prompt

const numeroKm = prompt('Inserisci il numero dei Km');
console.log('numeroKm: ', numeroKm)

//--definisco una variabile eta-user e salvo il valore di un prompt

const etaUser = prompt('Inserisci la tua età');
console.log('etaUser: ', etaUser)

//Andiamo a calcolare il prezzo del biglietto moltiplicando il numero di km \* il costo di ogni km percorso (0.21) e infine sottraiamo lo sconto riferito all'età

const prezzoBase = (numeroKm * 0.21);
console.log('prezzoBase: ', prezzoBase)
let sconto = 0;



//SE eta-user >= 65 anni
//applico sconto del 40%

if (etaUser >= 65)
    {sconto = prezzoBase * 0.4;
    console.log('sconto: ', sconto)}
//ELSE SE eta-user < 18 anni
//applico sconto del 20%

else if (etaUser < 18)
   {sconto = prezzoBase * 0.4;
    console.log('sconto: ', sconto)}


const prezzoTotale = prezzoBase - sconto
console.log('prezzoTotale: ', prezzoTotale)

// Formatta l'output con massimo due decimali
const prezzoFormattato = prezzoTotale.toFixed(2);
console.log('prezzoFormattato: ', prezzoFormattato)
