// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// chiedo all'utente di scegliere tra pari e dispari
const typeNumber = prompt("Scegli PARI o DISPARI").toLowerCase().trim();
console.log("L'utente ha scelto: " + typeNumber);

// interrompi il gioco se l'utente non inserisce un dato tra "pari" e "dispari"
if (typeNumber != "pari" && typeNumber != "dispari") {
  alert("Non hai inserito un dato corretto");
} else {
  // chiedo all'utente di scegliere un numero tra 1 e 5
  const userNumber = parseInt(prompt("Scegli un numero tra 1 e 5"));
  console.log("L'utente ha scelto il numero: " + userNumber);

  // interrompi il gioco se l'utente non inserisce un numero o se non inserisce un numero tra 1 e 5
  if (isNaN(userNumber) || userNumber > 5 || userNumber < 1) {
    alert("Non hai inserito un dato corretto");
  } else {
    // creo una funzione che genera un numero casuale
    function generateRandomNumber(min, max) {
      const randomNumber = Math.floor(Math.random() * (max + min - 1) + min);
      return randomNumber;
    }

    // uso la funzione per ottenere il numero casuale del computer e lo stampo in console
    const computerNumber = generateRandomNumber(1, 5);
    console.log("Il numero del computer è: " + computerNumber);

    // faccio la somma del numero dell'utente e del numero randomico del computer
    const somma = userNumber + computerNumber;
    console.log("La somma dei due numeri è: " + somma);

    let evenNumber;
    // creo una funzione con cui stabilisco se un numero è pari
    function isEvenNumber(number) {
      if (number % 2 == 0) {
        evenNumber = true;
      } else {
        evenNumber = false;
      }
      return evenNumber;
    }

    // dichiaro il vincitore
    if (
      (isEvenNumber(somma) == true && typeNumber == "pari") ||
      (isEvenNumber(somma) == false && typeNumber == "dispari")
    ) {
      alert("HAI VINTO!");
    } else {
      alert("HAI PERSO!");
    }
  }
}
