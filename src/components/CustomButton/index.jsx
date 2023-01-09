import { Button } from "@mui/material";
import { Link } from "react-scroll";

function CustomButton(props) {
  return (
    <Button
      onClick={props.function && props.function}
      type={props.type}
      size={props.size}
      variant={props.variant}
      sx={{
        color: props.color,
        borderColor: props.borderColor,
        bgcolor: props.bgcolor,
        padding: props.padding,
        fontFamily: "'Inter', sans-serif",
        justifyContent: props.justify,
        "&:hover": {
          textDecoration: props.underline,
          borderColor: props.borderColorHover,
        },
      }}
    >
      {!props.to && props.text}
      {props.to && (
        <Link
          to={props.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          {props.text}
        </Link>
      )}
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
