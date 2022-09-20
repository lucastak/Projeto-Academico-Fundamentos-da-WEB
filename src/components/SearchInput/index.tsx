import "./styles.css";

export default function SearchInput() {
  return (
    <div className="header-input-container">
      <input className="input-search" type="text" placeholder="Buscar..." />
      <button className="button-search" type="submit">
        <img
          src={require("../../assets/search-icon.png")}
          alt="Ícone de uma luneta indicando a busca"
        />
      </button>
    </div>
  );
}
