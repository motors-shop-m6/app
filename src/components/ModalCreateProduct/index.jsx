import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomButton from "../CustomButton";
import {
  buttonContainedPurple,
  buttonContainedPurpleButton,
  buttonNoBorder,
  buttonOutlinedLight,
} from "../../styles/buttonProps";
import { useState } from "react";
import ModalText from "../ModalText";
import CustomInput from "../CustomInput";

function ModalCreateProduct(props) {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({ resolver: yupResolver(props.schema) });
  const [adType, setAdType] = useState("Venda");
  const [vehicle, setVehicle] = useState("carro");
  const [imgField, setImgField] = useState(1);

  const changeAdSell = () => {
    setAdType("Venda");
  };
  const changeAdAuction = () => {
    setAdType("Leilão");
  };
  const changeCar = () => {
    setVehicle("carro");
  };
  const changeMotorcycle = () => {
    setVehicle("moto");
  };
  const addImgField = () => {
    if (imgField < 6) setImgField(imgField + 1);
  };

  const buttonSell = {
    text: "Venda",
    function: changeAdSell,
    ...(adType === "Venda"
      ? { ...buttonContainedPurpleButton }
      : { ...buttonOutlinedLight }),
  };
  const buttonAuction = {
    text: "Leilão",
    function: changeAdAuction,
    ...(adType === "Venda"
      ? { ...buttonOutlinedLight }
      : { ...buttonContainedPurpleButton }),
  };
  const buttonCar = {
    text: "Carro",
    function: changeCar,
    ...(vehicle === "carro"
      ? { ...buttonContainedPurpleButton }
      : { ...buttonOutlinedLight }),
  };
  const buttonMotorcycle = {
    text: "Moto",
    function: changeMotorcycle,
    ...(vehicle === "carro"
      ? { ...buttonOutlinedLight }
      : { ...buttonContainedPurpleButton }),
  };

  const buttonBlank = {
    ...buttonNoBorder,
    text: "Adicionar campo para imagem da galeria",
    function: addImgField,
  };
  const buttonGrey = {
    ...buttonNoBorder,
    text: "Cancelar",
  };
  const buttonPurple = {
    ...buttonContainedPurple,
    text: "Criar anuncio",
  };

  return (
    <Dialog
      component="form"
      //   onSubmit={handleSubmit(props.contactFunction)}
      open={props.open}
      //   onClose={() => props.setOpen(false)}
    >
      <DialogTitle>
        <Typography
          sx={{
            variant: "h7",
            color: "grey.1",
          }}
        >
          Criar anúncio
        </Typography>

        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: "grey.4",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack direction="column" spacing={2}>
          <ModalText text="Tipo de anúncio" />
          <Stack direction={{ xs: "column", sm: "row", md: "row" }} spacing={2}>
            <CustomButton {...buttonSell} />
            <CustomButton {...buttonAuction} />
          </Stack>
          <ModalText text="Informações do veículo" />
          <Stack direction="column" spacing={1}>
            <ModalText text="Título" />
            <CustomInput
              color="white"
              placeholder="Digitar Título"
              variant="outlined"
              // register={register("name")}
            />
          </Stack>
          <Stack
            spacing={{ xs: 0, sm: 1, md: 1 }}
            direction="row"
            flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
            alignItems="center"
          >
            <Stack direction="column" spacing={1}>
              <ModalText text="Ano" />
              <CustomInput
                color="white"
                placeholder="Digitar Ano"
                variant="outlined"
                // register={register("name")}
              />
            </Stack>
            <Stack direction="column" spacing={1}>
              <ModalText text="Quilometragem" />
              <CustomInput
                color="white"
                placeholder="0"
                variant="outlined"
                // register={register("name")}
              />
            </Stack>
            <Stack direction="column" spacing={1}>
              <ModalText text="Preço" />
              <CustomInput
                color="white"
                placeholder="Digitar preço"
                variant="outlined"
                // register={register("name")}
              />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="Descrição" />
            <CustomInput
              color="white"
              placeholder="Digitar descrição"
              variant="outlined"
              // register={register("name")}
            />
          </Stack>
          <Stack direction="column" spacing={2}>
            <ModalText text="Tipo de veículo" />
            <Stack
              direction={{ xs: "column", sm: "row", md: "row" }}
              spacing={2}
            >
              <CustomButton {...buttonCar} />
              <CustomButton {...buttonMotorcycle} />
            </Stack>
          </Stack>

          <Stack direction="column" spacing={1}>
            <ModalText text="Imagem da capa" />
            <CustomInput
              color="white"
              placeholder="Inserir URL da imagem"
              variant="outlined"
              // register={register("name")}
            />
          </Stack>
          {[...Array(imgField)].map((x, i) => (
            <Stack key={i} direction="column" spacing={1}>
              <ModalText text={`${i + 1}ª Imagem da galeria`} />
              <CustomInput
                color="white"
                placeholder="Inserir URL da imagem"
                variant="outlined"
                // register={register("name")}
              />
            </Stack>
          ))}
          <CustomButton {...buttonBlank} />
        </Stack>
      </DialogContent>
      <DialogActions>
        <CustomButton {...buttonGrey} />
        <CustomButton {...buttonPurple} />
      </DialogActions>
    </Dialog>
  );
}

export default ModalCreateProduct;
