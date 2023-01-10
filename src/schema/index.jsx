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

export const editUserSchema = yup.object().shape({
  name: yup.string().max(100),
  email: yup.string().email("Email inválido").max(127),
  cpf: yup
    .string()
    .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato do CPF: 000.000.000-00.")
    .max(15),
  password: yup
    .string()
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter ao menos um símbolo, letras, números e ter no mínimo 8 caracteres!"
    )
    .max(255),
  phone: yup
    .string()
    .matches(/^[1-9]{2} (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/, "11 99000-0000")
    .max(20),
  birthDate: yup
    .string()
    .matches(/([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/, "00/00/0000")
    .max(10),
  description: yup.string().max(255),
});
