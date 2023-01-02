import { Paper, Skeleton, Stack, Typography, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuctionCard from "../components/AuctionCard";
import CustomButton from "../components/CustomButton";
import CustomEmpty from "../components/CustomEmpty";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import CustomProduct from "../components/CustomProduct";
import { VehiclesContext } from "../contexts/vehicles/VehiclesContext";
import { buttonOutlinedDashboard } from "../styles/buttonProps";

function Dashboard() {
  const { vehicles } = useContext(VehiclesContext);
  const carsButton = { ...buttonOutlinedDashboard, text: "Carros", to: "cars" };
  const motorcyclesButton = {
    ...buttonOutlinedDashboard,
    text: "Motos",
    to: "motorcycles",
  };

  const motorsFilter =
    vehicles !== null &&
    vehicles.filter((item) => item.typeOfVehicle === "moto");
  const carsFilter =
    vehicles !== null &&
    vehicles.filter((item) => item.typeOfVehicle === "carro");

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
          <CustomButton onClick={() => {}} {...carsButton} />
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
          <Typography id="cars" variant="h5">
            Carros
          </Typography>
        </Stack>
        <Stack
          spacing={5}
          direction="row"
          width="100%"
          height="90%"
          overflow="auto"
        >
          {vehicles === null ? (
            <>
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
            </>
          ) : carsFilter.length > 0 ? (
            carsFilter.map((item) => (
              <CustomProduct
                key={item.id}
                urlImg={item.coverImage}
                nameVehicle={item.title}
                description={item.description}
                nameSeller={item.user.name}
                valueKM={item.km}
                year={item.year}
                price={item.price}
              />
            ))
          ) : (
            <CustomEmpty />
          )}
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
          <Typography id="motorcycles" variant="h5">
            Motos
          </Typography>
        </Stack>
        <Stack
          spacing={5}
          direction="row"
          width="100%"
          height="90%"
          overflow="auto"
        >
          {vehicles === null ? (
            <>
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
              <Skeleton width="20rem" height="25rem" variant="rectangular" />
            </>
          ) : motorsFilter.length > 0 ? (
            motorsFilter.map((item) => (
              <CustomProduct
                key={item.id}
                urlImg={item.coverImage}
                nameVehicle={item.title}
                description={item.description}
                nameSeller="Caza caza"
                valueKM={item.km}
                year={item.year}
                price={item.price}
              />
            ))
          ) : (
            <CustomEmpty />
          )}
        </Stack>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default Dashboard;
