import { useEffect, useState } from "react";

import styles from "./styles.module.css";

export default function Favoritos() {
  const [dados, setdados] = useState([]);

  async function loadApiDados() {
    const response = await fetch(
      "https://covid19-brazil-api.now.sh/api/report/v1",
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const responseValue = await response.json();

    setdados(responseValue);
  }

  function loadDados() {
    loadApiDados();
  }

  useEffect(() => {
    loadDados();
  }, []);

  return (
    <div className="container">
      <div className={styles["favoritos"]}>
        <h1>Dados</h1>

        {dados.dados.map((element) => {
          return <div key={element.uid}>{element.uf}</div>;
        })}
      </div>
    </div>
  );
}
