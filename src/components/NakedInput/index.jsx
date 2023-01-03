import { InputBase, InputLabel, Stack } from "@mui/material";

function NakedInput(props) {
  return (
    <Stack spacing={2}>
      <InputLabel
        sx={{
          fontWeight: 500,
        }}
      >
        {props.label}
      </InputLabel>
      <InputBase
        placeholder={props.placeholder}
        sx={{
          px: 2,
        }}
      />
    </Stack>
  );
}
export default NakedInput;

{
  /* <NakedInput label="Name" placeholder="Write here"  /> */
}
