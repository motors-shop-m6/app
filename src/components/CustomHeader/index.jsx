import {
  AppBar,
  Toolbar,
  Stack,
  IconButton,
  Divider,
  Drawer,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import motors_shop_logo from "../../assets/motors_shop_logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import {
  buttonTransparent,
  buttonTransparentOutlined,
} from "../../styles/buttonProps";
import CustomButton from "../CustomButton";
import { UserContext } from "../../contexts/user/UserContext";
import { stringAvatar } from "../../utils";

function CustomHeader(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerActive, setDrawerActive] = useState(
    window.innerWidth > 750 ? false : true
  );
  const [screen, setScreen] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { user, setToken, setId, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const loginRedirect = () => {
    navigate("/login");
  };

  const registerRedirect = () => {
    navigate("/register");
  };

  const logoutRedirect = () => {
    localStorage.clear();
    setToken("");
    setId("");
    setUser(null);
    if (location.pathname === "/") return window.location.reload;
    if (!user) navigate("/");
  };

  const screenWatcher = () => {
    setScreen({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  const screenChanger = () => {
    if (screen.winWidth > 750) {
      setDrawerActive(false);
    } else {
      setDrawerActive(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", screenWatcher);
    window.addEventListener("resize", screenChanger);

    return () => {
      window.removeEventListener("resize", screenWatcher);
      window.addEventListener("resize", screenChanger);
    };
  }, [screen]);

  const cars = {
    ...buttonTransparent,
    text: "Carros",
    borderColorHover: "transparent",
    underline: "underline",
    to: "cars",
  };
  const motorcycle = {
    ...buttonTransparent,
    text: "Motos",
    borderColorHover: "transparent",
    underline: "underline",
    to: "motorcycles",
  };
  const auction = {
    ...buttonTransparent,
    text: "Leilão",
    borderColorHover: "transparent",
    underline: "underline",
  };
  const login = {
    ...buttonTransparent,
    text: "Fazer Login",
    borderColorHover: "transparent",
    underline: "underline",
    function: loginRedirect,
  };
  const register = {
    ...buttonTransparentOutlined,
    text: "Cadastrar",
    borderColorHover: "brand.2",
    function: registerRedirect,
  };
  const userName = {
    ...buttonTransparent,
    text: user && user.name,
    size: "medium",
    borderColorHover: "transparent",
    underline: "underline",
    function: handleClick,
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "grey.whiteFixed",
      }}
    >
      <Toolbar>
        <Stack px={5} sx={{ flexGrow: 5, px: { md: 4, lg: 5 } }}>
          <Stack
            component="a"
            onClick={() => {
              topFunction();
              navigate("/");
            }}
          >
            <Box
              component="img"
              sx={{
                cursor: "pointer",
                transition: "300ms ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  transition: "300ms ease-in-out",
                },
              }}
              src={motors_shop_logo}
              width="7rem"
              height="1.25rem"
            />
          </Stack>
        </Stack>
        {drawerActive ? (
          <>
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
            >
              <Box
                p={2}
                width="15.625rem"
                justifyContent="center"
                textAlign="center"
              >
                <Typography variant="h4">Opções</Typography>
                <Stack spacing={3} direction="column">
                  <CustomButton {...cars} />
                  <CustomButton {...motorcycle} />
                  <CustomButton {...auction} />
                  <CustomButton {...login} />
                  <CustomButton {...register} />
                </Stack>
              </Box>
            </Drawer>
          </>
        ) : (
          <Stack sx={{ flexGrow: 0.4 }}>
            <Stack spacing={3} alignItems="center" direction="row">
              <CustomButton {...cars} />
              <CustomButton {...motorcycle} />
              <CustomButton {...auction} />
              <Divider orientation="vertical" flexItem />
              {user ? (
                <Stack direction="row" alignItems="center">
                  <Avatar {...stringAvatar(user.name)} />
                  <CustomButton
                    id="resources-button"
                    {...userName}
                    onClick={handleClick}
                  />
                  <Menu
                    id="user-resources"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Editar Perfil</MenuItem>
                    <MenuItem onClick={handleClose}>Editar Endereço</MenuItem>
                    <MenuItem onClick={handleClose}>Meus Anúncios</MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        logoutRedirect();
                      }}
                    >
                      Sair
                    </MenuItem>
                  </Menu>
                </Stack>
              ) : (
                <>
                  <CustomButton {...login} />
                  <CustomButton {...register} />
                </>
              )}
            </Stack>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default CustomHeader;
