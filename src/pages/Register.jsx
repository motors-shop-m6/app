import * as React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../api/api";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { Stack, Typography } from "@mui/material";

import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

import {
  buttonContainedPurple,
  buttonOutlinedLight,
  buttonContainedPurpleButton,
} from "../styles/buttonProps";
import {
  nameInput,
  emailInput,
  cpfInput,
  phoneInput,
  birthDateInput,
  descriptionInput,
  cepInput,
  stateInput,
  cityInput,
  streetInput,
  numberInput,
  complementInput,
  passwordInput,
  passwordConfirmInput,
} from "../styles/inputRegister";

function Register() {
  const navigate = useNavigate();

  const [accountType, setAccountType] = useState("comprador");

  const buyer = () => {
    setAccountType("comprador");
  };
  const advertiser = () => {
    setAccountType("anunciante");
  };

  const buttonBuyer = {
    text: "Comprador",
    function: buyer,
    ...(accountType === "comprador"
      ? { ...buttonContainedPurpleButton }
      : { ...buttonOutlinedLight }),
  };
  const buttonAdvertiser = {
    text: "Anunciante",
    function: advertiser,
    ...(accountType === "comprador"
      ? { ...buttonOutlinedLight }
      : { ...buttonContainedPurpleButton }),
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const loginRedirect = () => {
    navigate("/login");
  };

  const registerButton = {
    ...buttonContainedPurple,
    text: "Finalizar Cadastro",
    //function: loginRedirect,
  };

  const nameInputProps = {
    ...nameInput,
    error: errors?.name ? true : false,
    helperText: errors?.name && errors.name.message,
    register: register("name"),
  };

  const emailInputProps = {
    ...emailInput,
    error: errors?.email ? true : false,
    helperText: errors?.email && errors.email.message,
    register: register("email"),
  };

  const cpfInputProps = {
    ...cpfInput,
    error: errors?.cpf ? true : false,
    helperText: errors?.cpf && errors.cpf.message,
    register: register("cpf"),
  };

  const phoneInputProps = {
    ...phoneInput,
    error: errors?.phone ? true : false,
    helperText: errors?.phone && errors.phone.message,
    register: register("phone"),
  };

  const birthDateInputProps = {
    ...birthDateInput,
    error: errors?.birthDate ? true : false,
    helperText: errors?.birthDate && errors.birthDate.message,
    register: register("birthDate"),
  };

  const descriptionInputProps = {
    ...descriptionInput,
    error: errors?.description ? true : false,
    helperText: errors?.description && errors.description.message,
    register: register("description"),
  };

  const cepInputProps = {
    ...cepInput,
    error: errors?.cep ? true : false,
    helperText: errors?.cep && errors.cep.message,
    register: register("address.cep"),
  };

  const stateInputProps = {
    ...stateInput,
    error: errors?.state ? true : false,
    helperText: errors?.state && errors.state.message,
    register: register("address.state"),
  };

  const cityInputProps = {
    ...cityInput,
    error: errors?.city ? true : false,
    helperText: errors?.city && errors.city.message,
    register: register("address.city"),
  };

  const streetInputProps = {
    ...streetInput,
    error: errors?.street ? true : false,
    helperText: errors?.street && errors.street.message,
    register: register("address.street"),
  };

  const numberInputProps = {
    ...numberInput,
    error: errors?.number ? true : false,
    helperText: errors?.number && errors.number.message,
    register: register("address.number"),
  };

  const complementInputProps = {
    ...complementInput,
    error: errors?.complement ? true : false,
    helperText: errors?.complement && errors.complement.message,
    register: register("address.complement"),
  };

  const passwordInputProps = {
    ...passwordInput,
    error: errors?.password ? true : false,
    helperText: errors?.password && errors.password.message,
    register: register("password"),
  };

  const passwordConfirmInputProps = {
    ...passwordConfirmInput,
    error: errors?.passwordConfirm ? true : false,
    helperText: errors?.passwordConfirm && errors.passwordConfirm.message,
    register: register("passwordConfirm"),
  };

  const onSubmitData = (data) => {
    delete data["passwordConfirm"];
    const response = api
      .post("/user", data)
      .then((res) => {
        toast.success("Cadastro bem sucedido!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Dados inválidos, verifique os campos");
      });
    return response;
  };

  useEffect(() => {
    register("type_user", { value: accountType });
  }, [accountType]);

  return (
    <>
      <CustomHeader />
      <Stack
        sx={{
          bgcolor: "grey.8",
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction="column"
          justifyContent="center"
          component="form"
          onSubmit={handleSubmit(onSubmitData)}
          p={15}
          spacing={3}
          mt={7}
          sx={{
            bgcolor: "grey.whiteFixed",
            borderRadius: ".2rem",
          }}
        >
          <Typography variant="h5" component="div">
            Cadastro
          </Typography>
          <Typography fontSize="0.875rem" component="div">
            Informações pessoais
          </Typography>
          <CustomInput {...nameInputProps} />
          <CustomInput {...emailInputProps} />
          <CustomInput {...cpfInputProps} />
          <CustomInput {...phoneInputProps} />
          <CustomInput {...birthDateInputProps} />
          <CustomInput {...descriptionInputProps} />

          <Typography fontSize="0.875rem" component="div">
            Informações de endereço
          </Typography>
          <CustomInput {...cepInputProps} />
          <Stack direction="row" spacing={2}>
            <CustomInput {...stateInputProps} />
            <CustomInput {...cityInputProps} />
          </Stack>
          <CustomInput {...streetInputProps} />
          <CustomInput {...numberInputProps} />
          <CustomInput {...complementInputProps} />

          <Typography fontSize="0.875rem" component="div">
            Tipo de conta
          </Typography>

          <Stack direction="row" spacing={2}>
            <CustomButton {...buttonBuyer} />
            <CustomButton {...buttonAdvertiser} />
          </Stack>

          <CustomInput {...passwordInputProps} />
          <CustomInput {...passwordConfirmInputProps} />

          <CustomButton {...registerButton} />
        </Stack>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default Register;
