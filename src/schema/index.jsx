import * as yup from "yup";

export const loginSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório")
    .max(100, "Nome inválido")
    .matches(/^[a-z ,.'-]+$/i, "Nome inválido"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo de 6 caracteres"),
});
