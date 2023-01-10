import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../CustomButton";
import { toast } from "react-toastify";
import {
  buttonContainedPurple,
  buttonNoBorder,
} from "../../styles/buttonProps";
import { useContext, useEffect } from "react";
import ModalText from "../ModalText";
import CustomInput from "../CustomInput";
import { api } from "../../api/api";
import { VehiclesContext } from "../../contexts/vehicles/VehiclesContext";
import { UserContext } from "../../contexts/user/UserContext";

function ModalEditUser(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver() });

  const { vehicles, setVehicles } = useContext(VehiclesContext);
  const { user } = useContext(UserContext);

  const buttonGrey = {
    ...buttonNoBorder,
    text: "Cancelar",
    function: props.handleClose,
  };
  const buttonPurple = {
    ...buttonContainedPurple,
    text: "Salvar alterações",
    padding: {
      sm: ".3rem 1rem",
      md: ".7rem 4rem",
      lg: ".7rem 4rem",
    },
    ...(!errors && { function: props.handleClose }),
  };

  const onSubmitData = (data) => {
    const response = api
      .post("/advertisement", data)
      .then((res) => {
        toast.success("Veículo anunciado com sucesso");
        setVehicles([...vehicles, res.data]);
      })
      .catch(() => {
        toast.error("Dados inválidos, verifique os campos");
      });
    return response;
  };

  useEffect(() => {}, []);

  console.log(user);

  return (
    <Dialog
      component="form"
      onSubmit={handleSubmit(onSubmitData)}
      open={props.open}
      onClose={props.handleClose}
    >
      <DialogTitle>
        <Typography
          sx={{
            variant: "h7",
            color: "grey.1",
          }}
        >
          Editar perfil
        </Typography>

        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.4",
          }}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2}>
          <ModalText text="Informações pessoais" />

          <Stack direction="column" spacing={1}>
            <ModalText text="Nome" />
            <CustomInput
              color="white"
              placeholder={user?.name}
              variant="outlined"
              error={errors?.name ? true : false}
              helperText={errors?.name && errors.name.message}
              register={register("name")}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="Email" />
            <CustomInput
              color="white"
              placeholder={user?.email}
              variant="outlined"
              error={errors?.email ? true : false}
              helperText={errors?.email && errors.email.message}
              register={register("email")}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="CPF" />
            <CustomInput
              color="white"
              placeholder={user?.cpf}
              variant="outlined"
              error={errors?.cpf ? true : false}
              helperText={errors?.cpf && errors.cpf.message}
              register={register("cpf")}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="Celular" />
            <CustomInput
              color="white"
              placeholder={user?.phone}
              variant="outlined"
              error={errors?.phone ? true : false}
              helperText={errors?.phone && errors.phone.message}
              register={register("phone")}
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="Descrição" />
            <CustomInput
              color="white"
              placeholder={user?.description}
              variant="outlined"
              error={errors?.description ? true : false}
              helperText={errors?.description && errors.description.message}
              register={register("description")}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          direction: "column",
        }}
      >
        <CustomButton {...buttonGrey} />
        <CustomButton {...buttonPurple} />
      </DialogActions>
    </Dialog>
  );
}

export default ModalEditUser;
