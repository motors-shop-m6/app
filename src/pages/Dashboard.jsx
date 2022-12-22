import { Paper, Skeleton, Stack, Typography, Box } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import AuctionCard from "../components/AuctionCard";
import CustomButton from "../components/CustomButton";
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
          ) : vehicles.length > 0 ? (
            vehicles.map((item) => (
              <CustomProduct
                key={item.id}
                urlImg={item.coverImage[0].image}
                nameVehicle={item.title}
                description={item.description}
                nameSeller="Caza caza"
                valueKM={item.km}
                year={item.year}
                price={item.price}
              />
            ))
          ) : (
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
          ) : vehicles.length > 0 ? (
            vehicles.map((item) => (
              <CustomProduct
                key={item.id}
                urlImg={item.coverImage[0].image}
                nameVehicle={item.title}
                description={item.description}
                nameSeller="Caza caza"
                valueKM={item.km}
                year={item.year}
                price={item.price}
              />
            ))
          ) : (
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
          )}
        </Stack>
      </Stack>
      <CustomFooter />
    </>
  );
}

export default Dashboard;
