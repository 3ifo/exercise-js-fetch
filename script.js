/*# Esercizio 1 - Posts
Studiati come funzionano le API di https://jsonplaceholder.typicode.com/.
Crea una pagina HTML in cui, dopo aver richiesto dei post all’API, vengono create delle card nel documento: per ogni card mostra titolo e contenuto.*/

// Contatti con il server

const prova = document.getElementById("prova");

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
};
