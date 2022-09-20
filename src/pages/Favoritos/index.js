import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export default function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function handleDelete(id) {
    let filtroFilmes = filmes.filter((item) => {
      return item.id !== id;
    });

    setFilmes(filtroFilmes);
    localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
  }

  return (
    <div className="container">
      <div className={styles["favoritos"]}>
        <h1>Meus Favoritos</h1>

        {filmes.length === 0 && <span>Você não possui filmes salvos</span>}

        <ul>
          {filmes.map((item) => {
            return (
              <li key={item.id}>
                <span>{item.nome}</span>

                <div>
                  <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                  <button onClick={() => handleDelete(item.id)}>Excluir</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
