import { InputLabel, Stack, TextField } from "@mui/material";

function CustomInput(props) {
  return (
    <Stack>
      <InputLabel
        sx={{
          color: props.color,
          fontWeight: props.fontWeight,
        }}
      >
        {props.labelText}
      </InputLabel>
      <TextField
        error={props.error}
        helperText={props.helperText}
        type={props.type}
        variant={props.variant}
        inputProps={props.register}
        placeholder={props.placeholder}
      />
    </Stack>
  );
}

export default CustomInput;

{
  /*
    COMPONENT CALLOUT EXAMPLE
    VARIANT can be: text, contained or outlined
    
    <CustomInput
        color="white"
        placeholder="Write here your test"
        labelText="Input Test"
        variant="outlined"
        register={register("name")}
    />*/
}
