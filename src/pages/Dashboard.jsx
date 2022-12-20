import { Stack } from "@mui/material";
import { useContext } from "react";
import CustomFooter from "../components/CustomFooter";
import CustomHeader from "../components/CustomHeader";

function Dashboard() {
  //   const { vehicle, loadingVehicle } = useContext();
  return (
    <>
      <CustomHeader />
      <CustomFooter />
    </>
  );
}

export default Dashboard;
