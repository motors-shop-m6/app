import { Box, Typography } from "@mui/material";

function CustomEmpty() {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "grey.6",
        borderRadius: ".7rem",
        "& > :not(style)": {
          m: 1,
          width: 230,
          height: 200,
        },
      }}
    >
      <Typography
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        variant="h5"
      >
        Não há nenhum anúncio até o momento! :)
      </Typography>
    </Box>
  );
}
export default CustomEmpty;
