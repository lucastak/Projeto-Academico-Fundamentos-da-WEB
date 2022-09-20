import React from "react";
import "./styles.css";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import FormSchema from "./schema/NewsLetterSchema";

interface IFormikValues {
  email: string;
}
const initialValues = {
  email: "",
};

export default function NewsLetter() {
  const handleClickNewsLetterSubmit = (values: IFormikValues) => {
    return console.log(values);
  };

  return (
    <div className="newsletter__container">
      <Formik
        initialValues={initialValues}
        onSubmit={handleClickNewsLetterSubmit}
        validationSchema={FormSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="newsletter__title">
              <h2>ASSINE NOSSA NEWSLETTER</h2>
            </div>
            <div className="newsletter__input-container">
              <Field
                id="email"
                name="email"
                placeholder="Seu e-mail"
                className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className="newsletter__invalid-feedback"
              />
              <button type="submit" className="newsletter__button-submit">
                ENVIAR
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
