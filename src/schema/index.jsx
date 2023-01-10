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

export const registerSchema = yup.object().shape({
  name: yup.string().required("Campo Obrigatório").max(100),
  email: yup
    .string()
    .required("Campo Obrigatório")
    .email("Email inválido")
    .max(127),
  cpf: yup
    .string()
    .required("Campo Obrigatório")
    //.matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "Formato do CPF: 000.000.000-00.")
    .max(15),
  password: yup
    .string()
    .required("Campo Obrigatória")
    .matches(
      /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
      "A senha deve conter ao menos um símbolo, letras, números e ter no mínimo 8 caracteres!"
    )
    .max(20),
  phone: yup
    .string()
    .required("Campo Obrigatório")
    //.matches(/^[1-9]{2} (?:[2-8]|9[1-9])[0-9]{3}-[0-9]{4}$/, "(DDD) 90000-0000")
    .max(20),
  birthDate: yup
    .string()
    .required("Data de nascimento Obrigatória")
    //.matches(/([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/, "00/00/0000")
    .max(10),
  description: yup.string().required("Campo Obrigatório").max(255),
  address: yup.object().shape({
    cep: yup.string().required("Campo Obrigatório").max(9),
    state: yup.string().required("Campo Obrigatório").max(2),
    city: yup.string().required("Campo Obrigatório").max(20),
    street: yup.string().required("Campo Obrigatório").max(127),
    number: yup.string().required("Campo Obrigatório").max(10),
    complement: yup.string().max(20),
  }),
  type_user: yup.string().required("Campo Obrigatório").max(10),
  passwordConfirm: yup
    .string()
    .required("Confirme a senha")
    .oneOf([yup.ref("password")], "As senhas não são iguais!")
    .max(20),
});
