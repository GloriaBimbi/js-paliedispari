// chiedo una parola all'utente
const userWord = prompt("inserisci una parola");
console.log("La parola inserita dall'utente è: " + userWord);

// trasformo la parola data in un array che contiene come elementi le lettere che la compongono
const userWordsArray = userWord.split("");
console.log(userWordsArray);

// creo una funzione per capire se la parola inserita è palindroma
function palindromWord() {
  // dichiaro una variabile in cui raccoglierò la parola ribaltata
  let reverseWord = "";
  // con un ciclo for ribalto la parola inserita dall'utente
  for (let i = userWordsArray.lenght - 1; i >= 0; i--) {
    reverseWord += userWordsArray[i];
    console.log(reverseWord);
    console.log(i);
  }
  console.log("La parola inserita dall'utente, al contrario è: " + reverseWord);

  // con in if capisco se la parola dell'utente e il suo contrario sono uguali e quindi se essa è palindroma
  if (userWord == reverseWord) {
    alert("La parola inserita è PALINDROMA");
  } else {
    alert("La parola inserita NON è palindroma");
  }
}

palindromWord();
