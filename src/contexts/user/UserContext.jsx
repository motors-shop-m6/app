import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";

export const UserContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("@motors_shop:token") || ""
  );
  const [id, setId] = useState(localStorage.getItem("@motors_shop:id") || "");
  const [loading, setLoading] = useState(true);

  function loadUser() {
    if (token && id) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      api
        .get(`/user/${id}`)
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }
  useEffect(() => {
    loadUser();
  }, [token]);

  return (
    <UserContext.Provider
      value={{ user, loading, loadUser, token, setToken, id, setId }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
