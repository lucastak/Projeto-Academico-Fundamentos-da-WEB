import Footer from "../components/Footer";
import Header from "../components/Header";

export default function SaibaMais() {
  return (
    <div>
      <main className="content__wrapper">
        <div className="navigationbody__container">
          <a href="/">
            <img
              className="navigationbody__home-icon"
              src={require("../assets/home-icon.png")}
            />
          </a>

          <img
            className="navigationbody__arrow-icon"
            src={require("../assets/arrow-point-to-right-icon.png")}
          />
          <span className="navigationbody__page-text">SAIBA MAIS</span>
        </div>
        <div className="page__title">
          <h1>SAIBA MAIS</h1>
        </div>
      </main>
    </div>
  );
}
