import { Typography } from "@mui/material";

function ModalText(props) {
  return (
    <Typography
      variant="body2"
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontSize: ".875",
        fontWeight: 500,
      }}
    >
      {props.text}
    </Typography>
  );
}

export default ModalText;
