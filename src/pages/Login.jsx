import { InputBase, InputLabel, Stack, Typography } from "@mui/material";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import CustomInput from "../components/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../schema";
import CustomButton from "../components/CustomButton";
import { toast } from "react-toastify";
import {
  buttonContainedPurple,
  buttonOutlinedLight,
} from "../styles/buttonProps";
import { api } from "../api/api";
import { nameInput, passwordInput } from "../styles/inputProps";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const registerRedirect = () => {
    navigate("/register");
  };
  const loginRedirect = () => {
    navigate("/login");
  };

  const loginButton = {
    ...buttonContainedPurple,
    text: "Entrar",
    function: loginRedirect,
  };
  const registerButton = {
    ...buttonOutlinedLight,
    text: "Cadastrar",
    function: registerRedirect,
  };
  const nameInputProps = {
    ...nameInput,
    error: errors?.name ? true : false,
    helperText: errors?.name && errors.name.message,
    register: register("name"),
  };
  const passwordInputProps = {
    ...passwordInput,
    error: errors?.password ? true : false,
    helperText: errors?.password && errors.password.message,
    register: register("password"),
  };

  const onSubmitData = (data) => {
    const response = api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("motors_shop@token", res.data.token);
        localStorage.setItem("motors_shop@id", res.data.id);
        toast.success("Login bem sucedido!");
        setIsLogged(true);
        setTimeout(() => navigate("/profile"), 500);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Dados inválidos, verifique os campos");
      });
    return response;
  };

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
            Login
          </Typography>
          <CustomInput {...nameInputProps} />
          <CustomInput {...passwordInputProps} />
          <Typography
            sx={{
              color: "grey.2",
              cursor: "pointer",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
            alignSelf="flex-end"
            fontSize="0.875rem"
            component="a"
          >
            Esqueci minha senha
          </Typography>
          <CustomButton {...loginButton} />
          <Typography
            sx={{
              color: "grey.2",
              fontWeight: 400,
              fontSize: "0.875rem",
            }}
            alignSelf="center"
          >
            Ainda não possui conta?
          </Typography>
          <CustomButton {...registerButton} />
        </Stack>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default Login;
