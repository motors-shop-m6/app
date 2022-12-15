import { AppBar, Toolbar, Stack, IconButton } from "@mui/material";
import motors_shop_logo from "../../assets/motors_shop_logo.png";
import { buttonLogin } from "../../styles/buttonProps";
import CustomButton from "../CustomButton";

function CustomHeader(props) {
  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "grey.whiteFixed",
      }}
    >
      <Toolbar>
        <Stack sx={{ flexGrow: 1 }}>
          <img src={motors_shop_logo} width="100rem" />
        </Stack>
        <Stack sx={{ flexGrow: 1 }}>
          <Stack spacing={3}>
            <CustomButton {...buttonLogin} />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default CustomHeader;
