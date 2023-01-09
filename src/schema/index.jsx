import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Campo obrigatório")
    .max(100, "Nome inválido")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Email inválido"
    ),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(6, "Mínimo de 6 caracteres"),
});

export const createProductSchema = yup.object().shape({
  title: yup
    .string()
    .required("Campo obrigatório")
    .min(5, "Mínimo de 5 caracteres")
    .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Título inválido"),
  year: yup
    .string()
    .required("Campo obrigatório")
    .matches(/^[0-9]*$/, "Ano deve possuir apenas números")
    .test("len", "Insira um valor válido", (val) => val.length === 4),
  km: yup
    .string()
    .matches(/^[0-9]*$/, "Quilometragem deve possuir apenas números")
    .matches(/[+-]?([0-9]*[.])?[0-9]+/, "Insira um valor válido")
    .required("Campo obrigatório"),
  price: yup
    .string()
    .matches(/[+-]?([0-9]*[.])?[0-9]+/, "Insira um valor válido")
    .required("Campo obrigatório"),
  description: yup
    .string()
    .min(5, "Faça uma descrição formal")
    .required("Campo obrigatório"),
  typeOfVehicle: yup.string().required("Campo obrigatório"),
  coverImage: yup
    .string()
    .max(200, "Máximo de 200 caracteres")
    .required("Campo obrigatório"),
  images: yup.array(),
});
