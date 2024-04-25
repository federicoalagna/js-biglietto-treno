'use strict';

//Chiediamo all'utente il numero di km che dovrà fare e la sua età

//--definisco una variabile numero-km e salvo il valore di un prompt

const numerokm = prompt('Inserisci il numero dei Km');
console.log('numerokm: ', numerokm)

//--definisco una variabile eta-user e salvo il valore di un prompt

const etauser = prompt('Inserisci la tua età');
console.log('etauser: ', etauser)

//Andiamo a calcolare il prezzo del biglietto moltiplicando il numero di km \* il costo di ogni km percorso (0.21) e infine sottraiamo lo sconto riferito all'età

//1km = 0.21euro

//SE eta-user >= 65 anni
//applico sconto del 40%

//ELSE SE eta-user <= 18 anni
//applico sconto del 20%

//ELSE
//non viene applicato nessuno sconto

