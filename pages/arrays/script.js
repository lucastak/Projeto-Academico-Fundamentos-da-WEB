function getMovies(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criarElemento(filme) {
  const card = document.createElement("div");
  card.innerHTML = `
        <span>${filme.titulo}</span>
    `;

  return card;
}

function main() {
  let data = getMovies(
    "https://rafaelescalfoni.github.io/desenv_web/filmes.json"
  );
  let dados = JSON.parse(data);
  let container = document.getElementById("movies_container");
  dados.forEach((element) => {
    let movies = criarElemento(element);
    container.appendChild(movies);
  });
}

main();
