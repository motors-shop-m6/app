import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";

export const VehiclesContext = createContext({});

function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(null);
  const loadVehicle = () => {};
  useEffect(() => {
    const loadVehicle = async () => {
      try {
        await api.get("/advertisement/list").then((res) => {
          setVehicles(res.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    loadVehicle();
  }, []);

  return (
    <VehiclesContext.Provider value={{ vehicles }}>
      {children}
    </VehiclesContext.Provider>
  );
}

export default VehicleProvider;
