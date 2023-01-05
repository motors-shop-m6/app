import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    // name: yup
    .string()
    .required("Campo obrigatório")
    .max(100, "Nome inválido")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email inválido"
    ),
  // .matches(/^[a-z ,.'-]+$/i, "Nome inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo de 6 caracteres"),
});
