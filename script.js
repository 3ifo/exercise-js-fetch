/*# Esercizio 1 - Posts
Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, vengono create delle card nel documento: per ogni card mostra titolo e contenuto.*/

// Contatti con il server

/*const prova = document.getElementById("prova");

window.addEventListener("load", async function () {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    posts.forEach((elem) => {
      const card = creazionePostCards(elem);
      prova.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});

//Creazione delle card

const creazionePostCards = (post) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.innerText = post.title;
  const p = document.createElement("p");
  p.innerText = post.body;
  div.appendChild(h3);
  div.appendChild(p);
  return div;
};*/

/*# Esercizio 2 - Barzellette
Studiati come funzionano le API di https://v2.jokeapi.dev/.
Crea una pagina HTML in cui l’utente può decidere quante barzellette visualizzare. Dopo che l’utente ha deciso e dato conferma d’invio (con un bottone), 
interroga l’API e crea una lista di barzellette che contiene tante barzellette (a tema Programming) quante ne ha richieste l’utente.

const h3 = document.querySelector("h3");
const input = document.querySelector("input");
const button = document.querySelector("button");
window.addEventListener("load", function () {
  button.addEventListener("click", async function () {
    const div = document.createElement("div");
    document.body.appendChild(div);
    const quantita = parseInt(input.value);
    try {
      const response = await fetch(
        `https://v2.jokeapi.dev/joke/Programming?amount=${quantita}&type=single`
      );

      const { jokes } = await response.json();

      jokes.forEach((joke) => {
        const gioco = creazioneBarzellette(joke);
        div.appendChild(gioco);
      });
    } catch (error) {
      console.error(error);
    }
  });
});

//Creazione lista di barzellette

const creazioneBarzellette = (barzelletta) => {
  const div = document.createElement("div");
  const li = document.createElement("li");
  if (barzelletta.setup && barzelletta.delivery) {
    li.innerText = `${barzelletta.setup} ${barzelletta.delivery}`;
  } else if (barzelletta.joke) {
    li.innerText = barzelletta.joke;
  } else {
    li.innerText = "Barzelletta errore";
  }
  div.appendChild(li);
  return div;
};*/

/* # Esercizio 3 - Ricerca paesi per lingua
Studiati come funzionano le API di https://restcountries.com/.
Crea una pagina HTML in cui l’utente può inserire del testo ed effettuare una ricerca di paesi a partire dalla lingua. 
Dopo che l’utente ha scritto del testo e dato conferma d’invio (con un bottone), interroga l’API e crea una lista di cards, di cui ciascuna card è un risultato della ricerca. 
Ogni card rappresenta un paese cercato a partire dalla stringa inserita dall’utente (una lingua parlata nel paese).*/

const div2 = document.getElementById("div2");
const input = document.querySelector("input");
const button = document.querySelector("button");

window.addEventListener("load", function () {
  button.addEventListener("click", async function () {
    const linguaParlata = input.value;
    const questiPaesi = document.createElement("h5");
    questiPaesi.innerText = "La seguente lingua si parla in questi paesi:";
    div2.appendChild(questiPaesi);

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/lang/${linguaParlata}`
      );
      const obj = await response.json();
      obj.forEach((nazione) => {
        console.log(obj);
        const card = creaCard(nazione);
        div2.appendChild(card);
      });
    } catch (error) {
      console.error(error);
    }
  });
});

//Creazione card

const creaCard = (lang) => {
  const div = document.createElement("div");
  div.classList.add("cardss");
  const h4 = document.createElement("h4");
  const p = document.createElement("p");
  if (typeof lang.languages === "object") {
    const lingueArray = Object.values(lang.languages);
    p.innerText = `La lingua ufficiale è: ${lingueArray}`;
  }

  h4.innerText = `${lang.name.common}`;
  div.appendChild(h4);
  div.appendChild(p);
  return div;
};
