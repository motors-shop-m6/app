import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";

export const VehiclesContext = createContext({ children });

function ProductsProvider({ children }) {
  const [vehicle, setVehicle] = useState({});
  const [loadingVehicle, setLoadingVehicle] = useState(true);
  const loadVehicle = () => {};
  useEffect(() => {
    const loadVehicle = async () => {
      try {
        const { data } = await api.get("/advertisement/list");
        setVehicle(data);
      } catch (error) {
        console.error(error);
      }

      setLoadingVehicle(false);
    };
    loadVehicle();
  }, []);

  return (
    <ProductsContext.Provider value={{ vehicle, loadingVehicle, loadVehicle }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
