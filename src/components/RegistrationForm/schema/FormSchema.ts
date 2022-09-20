import * as Yup from "yup";

export default Yup.object().shape({
  name: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/g,
      "Nome Inválido"
    ),
  email: Yup.string().required("Campo obrigatório").email("Email inválido"),
  cpf: Yup.string()
    .required("Campo obrigatório")
    .matches(/[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/, "CPF inválido"),
  date: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
      "Data inválida"
    ),
  phone: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/g,
      "Número inválido"
    ),
  instagram: Yup.string()
    .required("Campo obrigatório")
    .matches(
      /(?:@)([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/g,
      "Instagram inválido"
    ),
  acceptTerms: Yup.bool().oneOf([true], "É necessário aceitar os termos"),
});
