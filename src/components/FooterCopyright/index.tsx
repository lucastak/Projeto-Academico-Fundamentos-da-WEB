import PaymentFlags from "../PaymentFlags";
import "./styles.css";

export default function FooterCopyright() {
  return (
    <div className="footer-copyright__wrapper">
      <div className="paymentsflags-mobile">
        <PaymentFlags />
      </div>

      <div className="footer-copyright__infotext-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed do
          eiusmod tempor
        </p>
      </div>

      <div className="paymentsflags-desktop">
        <PaymentFlags />
      </div>

      <div className="footer-copyright__developers">
        <p>Powerd by</p>
        <a href="https://vtex.com/">
          <img src={require("../../assets/vtex-right.png")} alt="Logo Vtex" />
        </a>

        <p>Developed by</p>
        <a href="https://m3ecommerce.com/">
          <img
            src={require("../../assets/m3-footer-right.png")}
            alt="Logo m3"
          />
        </a>
      </div>
    </div>
  );
}
