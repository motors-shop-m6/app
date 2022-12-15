import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button
      type={props.type}
      size={props.size}
      variant={props.variant}
      sx={{
        color: props.color,
      }}
    >
      {props.text}
    </Button>
  );
}

export default CustomButton;
