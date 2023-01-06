import { Avatar, Skeleton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import AuctionCard from "../components/AuctionCard";
import CustomButton from "../components/CustomButton";
import CustomEmpty from "../components/CustomEmpty";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";
import CustomProduct from "../components/CustomProduct";
import ModalCreateProduct from "../components/ModalCreateProduct";
import SimpleBackdrop from "../components/SimpleBackdrop";
import { UserContext } from "../contexts/user/UserContext";
import { VehiclesContext } from "../contexts/vehicles/VehiclesContext";
import { buttonOutlinedFullPurple } from "../styles/buttonProps";
import { stringAvatar } from "../utils";

function Dashboard() {
  const { vehicles } = useContext(VehiclesContext);
  const { user } = useContext(UserContext);

  const motorsFilter =
    vehicles !== null &&
    vehicles.filter((item) => item.typeOfVehicle === "moto");
  const carsFilter =
    vehicles !== null &&
    vehicles.filter((item) => item.typeOfVehicle === "carro");

  const buttonPurple = { ...buttonOutlinedFullPurple, text: "Criar anúncio" };
  console.log(user);

  return (
    <>
      <SimpleBackdrop open={!!!user} />
      <ModalCreateProduct open={false} />
      <CustomHeader />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={4}
        sx={{
          bgcolor: "brand.2",
          background:
            "linear-gradient(to bottom, #5126EA 0%, #5126EA 50%, #FFFFFF 50%, #FFFFFF 100%)",
          p: {
            xs: 3,
            sm: 7,
            md: 13,
          },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            p: {
              xs: 2,
              sm: 5,
              md: 7,
            },
            width: {
              xs: "100%",
              sm: "90%",
              md: "80%",
            },
            bgcolor: "grey.whiteFixed",
            borderRadius: ".3rem",
          }}
        >
          <Avatar
            {...stringAvatar(`${user?.name}`)}
            sx={{
              backgroundColor: "brand.1",
              fontFamily: "Inter",
              width: "6rem",
              height: "6rem",
              fontSize: "2rem",
              color: "grey.whiteFixed",
            }}
          />
          <Stack alignItems="center" direction="row" spacing={2}>
            <Typography variant="h6" sx={{ color: "grey.1" }}>
              {user?.name}
            </Typography>
            <Typography
              variant="body2"
              textTransform="capitalize"
              sx={{ color: "brand.1", fontSize: "0.875rem", fontWeight: 500 }}
            >
              {user?.type_user}
            </Typography>
          </Stack>
          <Typography
            variant="body1"
            sx={{
              fontWeight: 400,
              fontSize: "1rem",
              color: "grey.2",
            }}
          >
            {user?.description}
          </Typography>
          <Stack maxWidth="9rem">
            <CustomButton {...buttonPurple} />
          </Stack>
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
