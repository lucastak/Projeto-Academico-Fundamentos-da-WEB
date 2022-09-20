import "./styles.css";

export default function PaymentFlags() {
  return (
    <div className="payments-flags__wrapper">
      <img
        className="flagpayment-desktop"
        src={require("../../assets/master-flag-icon-desktop.png")}
        alt="Bandeira do Mastercard"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/master-flag-icon-mobile.png")}
        alt="Bandeira do Mastercard"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/visa-flag-icon-desktop.png")}
        alt="Bandeira da Visa"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/visa-flag-icon-mobile.png")}
        alt="Bandeira da Visa"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/diners-flag-icon-desktop.png")}
        alt="Bandeira do American Express"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/diners-flag-icon-mobile.png")}
        alt="Bandeira do American Express"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/elo-flag-icon-desktop.png")}
        alt="Bandeira do Elo"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/elo-flag-icon-mobile.png")}
        alt="Bandeira do Elo"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/hiper-flag-icon-desktop.png")}
        alt="Bandeira do Hipercard"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/hiper-flag-icon-mobile.png")}
        alt="Bandeira do Hipercard"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/paypal-flag-icon-desktop.png")}
        alt="Bandeira do PayPal"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/paypal-flag-icon-mobile.png")}
        alt="Bandeira do PayPal"
      />
      <img
        className="flagpayment-desktop"
        src={require("../../assets/boleto-flag-icon-desktop.png")}
        alt="Bandeira do Boleto"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/boleto-flag-icon-mobile.png")}
        alt="Bandeira do Boleto"
      />

      <div className="divider"></div>

      <img
        className="flagpayment-desktop"
        src={require("../../assets/vtex-pci-desktop.png")}
        alt="Vtex certificado"
      />
      <img
        className="flagpayment-mobile"
        src={require("../../assets/vtex-pci-mobile.png")}
        alt="Vtex certificado"
      />
    </div>
  );
}
