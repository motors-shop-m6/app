import VehicleProvider from "./vehicles/VehiclesContext";

function Providers({ children }) {
  return <VehicleProvider>{children}</VehicleProvider>;
}

export default Providers;
