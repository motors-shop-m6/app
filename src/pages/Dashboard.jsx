import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import AuctionCard from "../components/AuctionCard";
import CustomButton from "../components/CustomButton";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import { buttonOutlinedDashboard } from "../styles/buttonProps";

function Dashboard() {
  //   const { vehicle, loadingVehicle } = useContext();
  const carsButton = { ...buttonOutlinedDashboard, text: "Carros" };
  const motorcyclesButton = { ...buttonOutlinedDashboard, text: "Motos" };
  return (
    <>
      <CustomHeader />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          bgcolor: "brand.2",
          p: {
            xs: 3,
            sm: 7,
            md: 13,
          },
        }}
      >
        <Stack direction="column">
          <Typography
            color="grey.whiteFixed"
            textAlign="center"
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.75rem",
              },
            }}
          >
            Velocidade e experiência em um
          </Typography>
          <Typography
            color="grey.whiteFixed"
            textAlign="center"
            variant="h1"
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "2rem",
                md: "2.75rem",
              },
            }}
          >
            lugar feito para você
          </Typography>
        </Stack>
        <Typography
          color="grey.whiteFixed"
          variant="h7"
          textAlign="center"
          fontFamily="Inter"
          sx={{
            fontSize: {
              xs: ".6rem",
              sm: ".8rem",
              md: "1rem",
            },
          }}
        >
          Um ambiente feito para você explorar o seu melhor
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          spacing={3}
        >
          <CustomButton {...carsButton} />
          <CustomButton {...motorcyclesButton} />
        </Stack>
      </Stack>
      <Stack
        mt={10}
        mb={20}
        spacing={4}
        direction="column"
        padding="0 1rem 0 3rem"
      >
        <Stack>
          <Typography variant="h5">Leilão</Typography>
        </Stack>
        <Stack
          spacing={5}
          direction="row"
          width="100%"
          height="90%"
          overflow="auto"
        >
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
          <AuctionCard />
        </Stack>
      </Stack>
      <Stack
        mt={10}
        mb={20}
        spacing={4}
        direction="column"
        padding="0 1rem 0 3rem"
      >
        <Stack>
          <Typography variant="h5">Carros</Typography>
        </Stack>
        <Stack
          spacing={5}
          direction="row"
          width="100%"
          height="90%"
          overflow="auto"
        ></Stack>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default Dashboard;
