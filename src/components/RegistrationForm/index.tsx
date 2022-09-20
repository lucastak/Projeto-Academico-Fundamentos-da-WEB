import React from "react";
import "./styles.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import FormSchema from "./schema/FormSchema";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  date: string;
  phone: string;
  instagram: string;
  acceptTerms: boolean;
}
const initialValues = {
  name: "",
  email: "",
  cpf: "",
  date: "",
  phone: "",
  instagram: "",
  acceptTerms: false,
};

export default function RegistrationForm() {
  const handleFormSubmit = (values: IFormikValues) => {
    return console.log(values);
  };

  return (
    <div className="form__wrapper">
      <Formik
        initialValues={initialValues}
        onSubmit={handleFormSubmit}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form__inputs-container">
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                placeholder="Seu nome completo"
                className={errors.name && touched.name && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="name"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__inputs-container">
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__inputs-container">
              <label htmlFor="cpf">CPF</label>
              <Field
                id="cpf"
                name="cpf"
                placeholder="000 000 000 00"
                className={errors.cpf && touched.cpf && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__inputs-container">
              <label htmlFor="date">Data de Nascimento</label>
              <Field
                id="date"
                name="date"
                placeholder="00.00.00"
                className={errors.date && touched.date && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="date"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__inputs-container">
              <label htmlFor="phone">Telefone</label>
              <Field
                id="phone"
                name="phone"
                placeholder="(+00) 00000 0000"
                className={errors.phone && touched.phone && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="phone"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__inputs-container">
              <label htmlFor="instagram">Instagram</label>
              <Field
                id="instagram"
                name="instagram"
                placeholder="@seuuser"
                className={errors.instagram && touched.instagram && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__checkbox-container">
              <label htmlFor="acceptTerms">
                <span className="form__checkbox-alert">*</span>
                <u>Declaro que li e aceito</u>
              </label>
              <Field
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                className={
                  errors.acceptTerms && touched.acceptTerms && "invalid"
                }
              />
              <ErrorMessage
                component="span"
                name="acceptTerms"
                className="form__invalid-feedback"
              />
            </div>

            <div className="form__button-submit-cotainer">
              <button className="form__button-submit" type="submit">
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
