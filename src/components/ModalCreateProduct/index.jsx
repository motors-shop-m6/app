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
  buttonContainedPurpleButton,
  buttonNoBorder,
  buttonOutlinedLight,
} from "../../styles/buttonProps";
import { useContext, useEffect, useState } from "react";
import ModalText from "../ModalText";
import CustomInput from "../CustomInput";
import { createProductSchema } from "../../schema";
import { api } from "../../api/api";
import { VehiclesContext } from "../../contexts/vehicles/VehiclesContext";

function ModalCreateProduct(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(createProductSchema) });
  const [adType, setAdType] = useState("Venda");
  const [vehicle, setVehicle] = useState("carro");
  const [imgField, setImgField] = useState(1);

  const { vehicles, setVehicles } = useContext(VehiclesContext);

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
    disabled: true,
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
    function: props.handleClose,
  };
  const buttonPurple = {
    ...buttonContainedPurple,
    text: "Criar anuncio",
    padding: {
      sm: ".3rem 1rem",
      md: ".7rem 4rem",
      lg: ".7rem 4rem",
    },
    ...(!errors && { function: props.handleClose }),
  };

  const onSubmitData = (data) => {
    data.images.shift();
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

  useEffect(() => {
    register("typeOfVehicle", { value: vehicle });
  }, [vehicle]);

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
          onClick={props.handleClose}
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
              error={errors?.title ? true : false}
              helperText={errors?.title && errors.title.message}
              register={register("title")}
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
                error={errors?.year ? true : false}
                helperText={errors?.year && errors.year.message}
                register={register("year")}
              />
            </Stack>
            <Stack direction="column" spacing={1}>
              <ModalText text="Quilometragem" />
              <CustomInput
                color="white"
                placeholder="0"
                variant="outlined"
                error={errors?.km ? true : false}
                helperText={errors?.km && errors.km.message}
                register={register("km")}
              />
            </Stack>
            <Stack direction="column" spacing={1}>
              <ModalText text="Preço" />
              <CustomInput
                color="white"
                placeholder="Digitar preço"
                variant="outlined"
                error={errors?.price ? true : false}
                helperText={errors?.price && errors.price.message}
                register={register("price")}
              />
            </Stack>
          </Stack>
          <Stack direction="column" spacing={1}>
            <ModalText text="Descrição" />
            <CustomInput
              color="white"
              placeholder="Digitar descrição"
              variant="outlined"
              error={errors?.description ? true : false}
              helperText={errors?.description && errors.description.message}
              register={register("description")}
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
              error={errors?.coverImage ? true : false}
              helperText={errors?.coverImage && errors.coverImage.message}
              register={register("coverImage")}
            />
          </Stack>
          {[...Array(imgField)].map((x, i) => (
            <Stack key={i} direction="column" spacing={1}>
              <ModalText text={`${i + 1}ª Imagem da galeria`} />
              <CustomInput
                color="white"
                placeholder="Inserir URL da imagem"
                variant="outlined"
                error={errors?.images ? true : false}
                helperText={errors?.images && errors.images.message}
                register={register(`images.${i + 1}`)}
              />
            </Stack>
          ))}
          <CustomButton {...buttonBlank} />
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

export default ModalCreateProduct;
