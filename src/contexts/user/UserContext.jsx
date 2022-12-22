import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@motors_shop:token");
      const id = localStorage.getItem("@motors_shop:id");

      if (token && id) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          await api
            .get($`/profile/${id}`)
            .then((res) => {
              setUser(res.data);
            })
            .catch((err) => {
              console.error(err);
            });
        } catch (error) {
          console.error(error);
        }
      }
    }

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export default UserProvider;
