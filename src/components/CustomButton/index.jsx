import { Button } from "@mui/material";

function CustomButton(props) {
  return (
    <Button
      type={props.type}
      size={props.size}
      variant={props.variant}
      sx={{
        color: props.color,
        borderColor: props.borderColor,
        bgcolor: props.bgcolor,
        padding: props.padding,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {props.text}
    </Button>
  );
}

export default CustomButton;
{
  /* COMPONENT CALLOUT EXAMPLE
  VARIANT can be: text, contained or outlined
  SIZE can be: small, medium, larger
  bgcolor means background-color
  
   <CustomButton
  type="submit"
  size="small"
  variant="outlined"
  color="brand.2"
  borderColor="brand.2"
  bgcolor="brand.4"
  text="Text Button"
  padding=".5rem"
/>; */
}
