import { Box, Container, Avatar } from "@mui/material";
import { stringAvatar } from "../../utils";

function CustomProduct(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "70vh",
        width: "320px",
        margin: "0 auto",
        padding: {
          xs: 0,
          md: 0,
        },
      }}
    >
      <Container
        sx={{
          backgroundColor: "#E9ECEF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <img src={props.urlImg}></img>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          padding: 0,
          height: "7vh",
          alignItems: "center",
          fontSize: "16px",
          fontFamily: "fontFamily",
          fontWeight: 600,
          color: "grey.1",
        }}
      >
        <p>{props.nameVehicle}</p>
      </Container>

      <Container
        disableGutters
        sx={{
          padding: 0,
          height: "35px",
          width: "320px",
          fontSize: "14px",
          fontFamily: "Inter",
          fontWeight: 400,
          color: "grey.2",
          overflow: "hidden",
          textOverflow: "ellipsis",

          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {props.description}
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          height: "10vh",
          padding: 0,
          gap: "5px",
        }}
      >
        <Avatar
          {...stringAvatar(`${props.nameSeller}`)}
          sx={{
            backgroundColor: "brand.1",
            fontFamily: "Inter",
            color: "grey.whiteFixed",
          }}
        />

        <Container
          disableGutters
          sx={{
            fontFamily: "Inter",
            fontWeight: 500,
            color: "grey.2",
          }}
        >
          {props.nameSeller}
        </Container>
      </Container>

      <Container
        disableGutters
        sx={{
          display: "flex",
          height: "10vh",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-around",
            padding: 0,
            alignItems: "center",

            height: "45px",
          }}
        >
          <Container
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              height: "32px",
              width: "50px",
              padding: 0,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              backgroundColor: "brand.4",
              color: "brand.1",
            }}
          >
            {props.valueKM} KM
          </Container>

          <Container
            disableGutters
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              height: "32px",
              width: "50px",
              padding: 0,
              fontFamily: "Inter",
              fontWeight: 500,
              fontSize: "14px",
              backgroundColor: "brand.4",
              color: "brand.1",
            }}
          >
            {props.year}
          </Container>
        </Container>

        <Container
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            height: "45px",
            fontFamily: "fontFamily",
            fontWeight: 500,
            fontSize: "16px",
            padding: 0,
          }}
        >
          R$ {props.price}
        </Container>
      </Container>
    </Box>
  );
}

export default CustomProduct;
