import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import mercedes from "../../assets/mercedes.svg";
import { UserContext } from "../../contexts/user/UserContext";
import { useContext } from "react";
import CustomButton from "../CustomButton";
import { buttonWhiteOutlined } from "../../styles/buttonProps";

function AuctionCard() {
  const { user } = useContext(UserContext);

  const buttonWhiteEdit = { ...buttonWhiteOutlined, text: "Editar" };
  const buttonWhiteSeeMore = { ...buttonWhiteOutlined, text: "Ver como" };

  return (
    <Box
      sx={{
        transition: "300ms ease-in-out",
        width: {
          xs: 328,
          sm: 328,
          md: 735,
          lg: 735,
          xl: 735,
        },
        height: {
          xs: 530,
          sm: 530,
          md: 406,
          lg: 406,
          xl: 406,
        },
        background:
          "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);",
        "&:hover": {
          backgroundColor: "#212529",
          transition: "300ms ease-in-out",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Card
        sx={{
          maxWidth: {
            xs: 328,
            sm: 328,
            md: 735,
            lg: 735,
            xl: 735,
          },
          backgroundColor: "transparent",
          backgroundImage: `url(${mercedes})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPositionY: {
            xs: 130,
            sm: 130,
            md: 50,
            lg: 50,
            xl: 50,
          },
          backgroundPositionX: "-1vw",
        }}
      >
        <CardContent>
          <Button
            sx={{
              fontSize: 16,
              width: "123px",
              height: "36px",
              backgroundColor: "white",
              borderRadius: "20px",
              lineHeight: "20px",
              alignContent: "center",
              color: "black",
            }}
          >
            <AccessTimeIcon
              sx={{
                mr: "10px",
                color: "#4529E6",
              }}
            />
            01:58:00
          </Button>
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: "#FDFDFD",
              width: {
                xs: 313,
                sm: 313,
                md: 658,
                lg: 658,
                xl: 658,
              },
              height: {
                xs: 50,
                sm: 50,
                md: 25,
                lg: 25,
                xl: 25,
              },
              ml: "3px",
              mt: {
                xs: "20px",
                sm: "20px",
                md: "50px",
                lg: "50px",
                xl: "50px",
              },
              fontSize: "20px",
            }}
          >
            Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes
          </Typography>
          <Typography
            sx={{
              mt: {
                xs: "40px",
                sm: "40px",
                md: "16px",
                lg: "16px",
                xl: "16px",
              },
              color: "#CED4DA",
              fontSize: "16px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem...
          </Typography>
          <CardActions
            sx={{
              color: "white",
              gap: "10px",
              width: "320px",
              height: "32px",
              mt: "30px",
            }}
          >
            <Typography
              component="div"
              sx={{
                fontSize: 16,
                display: "flex",
                flexDirection: "row",
                justifyContent: "start",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: "#4529E6", mr: "10px" }}>R</Avatar>
              </Stack>
              Rodrigo Tavares
            </Typography>
          </CardActions>
          <CardActions
            sx={{
              mt: {
                xs: "40px",
                sm: "40px",
                md: "28px",
                lg: "28px",
                xl: "28px",
              },
              gap: "8px",
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              },
              justifyContent: {
                xs: "initial",
                sm: "initial",
                md: "space-between",
                lg: "space-between",
                xl: "space-between",
              },
              ml: {
                xs: "-150px",
                sm: "-150px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
            }}
          >
            <CardActions>
              <Button
                sx={{
                  width: "50px",
                  height: "32px",
                  background: "#EDEAFD",
                }}
                size="small"
              >
                2013
              </Button>
              <Button
                sx={{
                  width: "50px",
                  height: "32px",
                  background: "#EDEAFD",
                }}
                size="small"
              >
                0 KM
              </Button>
            </CardActions>
            <Typography
              variant="h6"
              component="div"
              sx={{
                color: "#FDFDFD",
                ml: {
                  xs: "20px",
                  sm: "20px",
                  md: "400px",
                  lg: "400px",
                  xl: "400px",
                },
                mt: "5px",

                fontSize: "20px",
              }}
            >
              R$ 78.500,00
            </Typography>
          </CardActions>
        </CardContent>
      </Card>
      {user?.type_user === "anunciante" ? (
        <Stack
          direction="row"
          px={4}
          spacing={4}
          sx={{
            width: {
              xs: 328,
              sm: 328,
              md: 735,
              lg: 735,
              xl: 735,
            },
            height: "61px",
            color: "#FFFFFF",
            backgroundColor: "#4529E6",
            transition: "300ms ease-in-out",
            "&:hover": {
              backgroundColor: "#5126EA",
              transition: "300ms ease-in-out",
            },
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomButton {...buttonWhiteEdit} />
          <CustomButton {...buttonWhiteSeeMore} />
        </Stack>
      ) : (
        <Button
          sx={{
            width: {
              xs: 328,
              sm: 328,
              md: 735,
              lg: 735,
              xl: 735,
            },
            height: "61px",
            color: "#FFFFFF",
            backgroundColor: "#4529E6",
            transition: "300ms ease-in-out",
            "&:hover": {
              backgroundColor: "#5126EA",
              transition: "300ms ease-in-out",
            },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Acessar página do leilão
          <ArrowForwardIcon />
        </Button>
      )}
    </Box>
  );
}

export default AuctionCard;
