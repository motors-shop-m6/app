import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button type={props.type} variant={props.variant}>
      {props.text}
    </Button>
  );
}

export default CustomButton;
