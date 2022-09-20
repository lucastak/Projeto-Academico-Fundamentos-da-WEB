import "./styles.css";

export default function WhatsCTA() {
  return (
    <div className="whatsapp-icon__container">
      <button className="whatsapp-icon__button">
        <a
          href="https://api.whatsapp.com/send?phone=5522999765626&text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato."
          target="_blank"
        >
          <img
            src={require("../../assets/whatsapp-icon.png")}
            alt="WhatsApp ícone"
          />
        </a>
      </button>
    </div>
  );
}
