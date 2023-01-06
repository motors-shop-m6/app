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
  buttonContainedPurpleButton,
  buttonOutlinedLight,
} from "../../styles/buttonProps";
import { useState } from "react";

function ModalCreateProduct(props) {
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({ resolver: yupResolver(props.schema) });
  const [adType, setAdType] = useState("Venda");

  const changeAdSell = () => {
    setAdType("Venda");
  };
  const changeAdAuction = () => {
    setAdType("Leilão");
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
        <Stack direction="column" spacing={3}>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: ".875",
              fontWeight: 500,
            }}
          >
            Tipo de anúncio
          </Typography>
          <Stack direction="row" spacing={2}>
            <CustomButton {...buttonSell} />
            <CustomButton {...buttonAuction} />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          margin: "auto",
          pb: "2rem",
        }}
      ></DialogActions>
    </Dialog>
  );
}

export default ModalCreateProduct;
