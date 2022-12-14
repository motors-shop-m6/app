import { Container, Box, Typography, Paper, IconButton } from "@mui/material";
import motors_shop_logo_white from "../../assets/motors_shop_logo_white.png";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function CustomFooter(props) {
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
        position: "fixed",
        bottom: 0,
        width: "100%",
        border: 0,
        bgcolor: "grey.0",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container
        sx={{
          p: {
            xs: 1,
            md: 3,
          },
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: "1rem",
          },
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <img src={motors_shop_logo_white} alt="Logo" />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant="caption" color="initial">
            © 2022 Todos os direitos reservados.
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <IconButton
            sx={{
              bgcolor: "grey.1",
              borderRadius: ".3rem",
              size: {
                xs: "medium",
                md: "large",
              },
              "&:hover": {
                bgcolor: "grey.2",
              },
            }}
            onClick={topFunction}
          >
            <KeyboardArrowUpIcon />
          </IconButton>
        </Box>
      </Container>
    </Paper>
  );
}

export default CustomFooter;
