import UserProvider from "./user/UserContext";
import VehicleProvider from "./vehicles/VehiclesContext";

function Providers({ children }) {
  return (
    <VehicleProvider>
      <UserProvider>{children}</UserProvider>
    </VehicleProvider>
  );
}

export default Providers;
