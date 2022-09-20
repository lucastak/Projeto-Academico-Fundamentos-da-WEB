import "./styles.css";
import { Link } from "react-router-dom";

export default function FooterLinks() {
  return (
    <section className="footer-links desktop">
      <div className="footer-links__wrapper">
        <div className="footer-links__block">
          <h4 className="footer-links__title">INSTITUCIONAL</h4>

          <ul>
            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Quem Somos
              </a>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Politica de Privacidade
              </a>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Segurança
              </a>
            </li>

            <li className="footer-links__item">
              <u>
                <a className="footer-links__link" href="/">
                  Seja um Revendedor
                </a>
              </u>
            </li>
          </ul>
        </div>

        <div className="footer-links__block">
          <h4 className="footer-links__title">DÚVIDAS</h4>

          <ul className="footer-links__items-list">
            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Entrega
              </a>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Pagamento
              </a>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Trocas e Devoluções
              </a>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="/">
                Dúvidas frequentes
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links__block">
          <h4 className="footer-links__title">FALE CONOSCO</h4>

          <ul className="footer-links__items-list">
            <li className="footer-links__subtitle">
              <span>Atendimento ao Consumidor</span>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="tel:1141594509">
                (11) 4159 4509
              </a>
            </li>

            <li className="footer-links__subtitle">
              <span>Atendimento Online</span>
            </li>

            <li className="footer-links__item">
              <a className="footer-links__link" href="tel:11994338825">
                (11) 99433-8825
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-links__block">
          <div className="footer-links__icons-container">
            <ul className="footer-links__items-list--social-networks">
              <li>
                <a
                  href="https://www.facebook.com/digitalm3"
                  target="_blank"
                  title="Facebook"
                >
                  <img
                    src={require("../../assets/facebook-icon.png")}
                    alt="Ícone do Facebook"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/m3.ecommerce/"
                  target="_blank"
                  title="Instagram"
                >
                  <img
                    src={require("../../assets/instagram-icon.png")}
                    alt="Ícone do Instagram"
                  />
                </a>
              </li>

              <li>
                <a href="#" target="_blank" title="Twitter">
                  <img
                    src={require("../../assets/twitter-icon.png")}
                    alt="Ícone do Twitter"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/channel/UCW4o86gZG_ceA8CmHltXeXA"
                  target="_blank"
                  title="Youtube"
                >
                  <img
                    src={require("../../assets/youtube-icon.png")}
                    alt="Ícone do Youtube"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/m3ecommerce/"
                  target="_blank"
                  title="Linkedin"
                >
                  <img
                    src={require("../../assets/linkedin-icon.png")}
                    alt="Ícone do Linkedin"
                  />
                </a>
              </li>
            </ul>
          </div>

          <a className="footer-link__linksite" href="#" target="_blank">
            www.loremipsum.com
          </a>
        </div>
      </div>
    </section>
  );
}
