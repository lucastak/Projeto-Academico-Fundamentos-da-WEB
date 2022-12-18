function getMovies(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criarElemento(filme) {
  const card = document.createElement("div");
  let contador = 0;
  let rating = 0;
  card.innerHTML = `
        <div class="card-movies__container">
            <h2>${filme.titulo}</h2>
            ${filme.opinioes
              .map((element) => {
                contador++;
                rating += element.rating;
                rating;
              })
              .join("")}

            <span class="card-movies__stars">${
              rating / contador
            } estrelas</span>
            
            <br/>
            <span>${
              filme.classificacao == 0 ? "Livre" : `${filme.classificacao}`
            }</span>
        </div>
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
