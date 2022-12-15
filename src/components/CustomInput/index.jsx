import { InputLabel, Stack, TextField } from "@mui/material";

function CustomInput(props) {
  return (
    <Stack>
      <InputLabel
        sx={{
          color: props.color,
        }}
      >
        {props.labelText}
      </InputLabel>
      <TextField variant={props.variant} inputProps={props.register} />
    </Stack>
  );
}

export default CustomInput;

{
  /*
    COMPONENT CALLOUT EXAMPLE
    VARIANT can be: text, contained or outlined
    
    <CustomInput
        labelText="Input Test"
        variant="outlined"
        register={register("name")}
    />*/
}
