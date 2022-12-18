function getMovies(url) {
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText;
}

function criarElemento(filme) {
  console.log("filme", filme);
  const card = document.createElement("div");
  card.classList.add("card__container");
  let contador = 0;
  let rating = 0;
  card.innerHTML = `
            <div class="card__top">
              <img class="card__top-image" alt="Banner do filme/serie" src="${
                filme.figura
              }"/>

              <div class="card__top-middle">
                <h2>${filme.titulo}</h2>
                <div class="card__top-generos">
                  ${filme.generos
                    .map((element) => {
                      return `<span>${element}</span>, `;
                    })
                    .join("")}
                </div>
                <div class="card__top-elenco">
                  <strong>Elenco: </strong>
                  ${filme.elenco
                    .map((element) => {
                      return `<span>${element}</span>, `;
                    })
                    .join("")}
                </div>
                
              </div>

              <div class="card__top-ratings">
                <span class="card__top-classificacao--${filme.classificacao}">${
    filme.classificacao == 0 ? "Livre" : `${filme.classificacao}`
  }</span>
                
                ${filme.opinioes
                  .map((element) => {
                    contador++;
                    rating += element.rating;
                  })
                  .join("")}

                <span class="card-top__stars">${
                  rating / contador < 5
                    ? `<img alt="estrela de raking" src="./star-yellow.svg"/> <img alt="estrela de raking" 
                    src="./star-yellow.svg"/> <img alt="estrela de raking" src="./star-yellow.svg"/> 
                    <img alt="estrela de raking" src="./star-yellow.svg"/> <img alt="estrela de raking" src="./star-grey.svg"/>`
                    : `<img alt="estrela de raking" src="./star-yellow.svg"/> <img alt="estrela de raking" src="./star-yellow.svg"/> 
                    <img alt="estrela de raking" src="./star-yellow.svg"/> <img alt="estrela de raking" 
                    src="./star-yellow.svg"/> <img alt="estrela de raking" src="./star-yellow.svg"/>`
                }
                </span>
              </div>
            </div> 
            
            <div class="card__resumo">
                <span>${filme.resumo}</span>
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
