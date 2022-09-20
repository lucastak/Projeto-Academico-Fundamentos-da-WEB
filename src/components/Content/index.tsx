import React, { useState } from "react";
import RegistrationForm from "../RegistrationForm";

import "./styles.css";

export default function Sobre() {
  const [title, setTitle] = useState("Sobre");
  const [description, setDescripton] =
    useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
  enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat
  nulla pariatur.`);

  const handleClickSobre = () => {
    setTitle("Sobre");
    setDescripton(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`);
  };

  const handleClickPagamento = () => {
    setTitle("Forma de Pagamento");
    setDescripton(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`);
  };

  const handleClickEntrega = () => {
    setTitle("Entrega");
    setDescripton(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`);
  };

  const handleClickTroca = () => {
    setTitle("Troca e Devolução");
    setDescripton(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`);
  };

  const handleClickSegurança = () => {
    setTitle("Segurança e Privacidade");
    setDescripton(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur.`);
  };

  const handleClickContato = () => {
    setTitle("PREENCHA O FORMULÁRIO");
    setDescripton("");
  };

  return (
    <main className="content__wrapper">
      <div className="navigationbody__container">
        <a href="/">
          <img
            className="navigationbody__home-icon"
            src={require("../../assets/home-icon.png")}
          />
        </a>
        <img
          className="navigationbody__arrow-icon"
          src={require("../../assets/arrow-point-to-right-icon.png")}
        />
        <span className="navigationbody__page-text">INSTITUCIONAL</span>
      </div>

      <div className="page__title">
        <h1>INSTITUCIONAL</h1>
      </div>
      <div className="content__container">
        <div className="content__buttons-container">
          <button
            onClick={handleClickSobre}
            className={
              title === "Sobre" ? "content__button active" : "content__button"
            }
          >
            Sobre
          </button>

          <button
            onClick={handleClickPagamento}
            className={
              title === "Forma de Pagamento"
                ? "content__button active"
                : "content__button"
            }
          >
            Forma de Pagamento
          </button>

          <button
            onClick={handleClickEntrega}
            className={
              title === "Entrega" ? "content__button active" : "content__button"
            }
          >
            Entrega
          </button>

          <button
            onClick={handleClickTroca}
            className={
              title === "Troca e Devolução"
                ? "content__button active"
                : "content__button"
            }
          >
            Troca e Devolução
          </button>

          <button
            onClick={handleClickSegurança}
            className={
              title === "Segurança e Privacidade"
                ? "content__button active"
                : "content__button"
            }
          >
            Segurança e Privacidade
          </button>

          <button
            onClick={handleClickContato}
            className={
              title === "PREENCHA O FORMULÁRIO"
                ? "content__button active"
                : "content__button"
            }
          >
            Contato
          </button>
        </div>

        <div
          className={
            title === "PREENCHA O FORMULÁRIO"
              ? "content__texts-form"
              : "content__texts"
          }
        >
          <div
            className={
              title === "PREENCHA O FORMULÁRIO"
                ? "content__title-form"
                : "content__title"
            }
          >
            <h2>{title}</h2>
          </div>

          <div className="content__description">
            <p>{description}</p>
          </div>

          {title === "PREENCHA O FORMULÁRIO" && <RegistrationForm />}
        </div>
      </div>
    </main>
  );
}
