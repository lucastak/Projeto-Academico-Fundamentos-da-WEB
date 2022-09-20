import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";

export default function Filme() {
  const { id } = useParams();
  const history = useHistory();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        history.replace("/");
        return;
      }

      setFilme(response.data);
      setLoading(false);
    }

    loadFilme();
  }, [id, history]);

  const salvaFilme = () => {
    let minhaLista = localStorage.getItem("filmes");
    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some(
      (filmesSalvo) => filmesSalvo.id === filme.id
    );

    if (hasFilme) {
      return;
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
  };
  if (loading) {
    return (
      <div>
        <h1>Carregando seu filme</h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="filme-info">
          <h1>{filme.nome}</h1>

          <h3>Sinopse</h3>
          <img src={filme.foto} alt={filme.nome} />
          <p>{filme.sinopse}</p>

          <div className="botoes">
            <button onClick={salvaFilme}>Salvar</button>
            <a
              href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}
              target="_blank"
              rel="noreferrer"
            >
              <button>Trailer</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
