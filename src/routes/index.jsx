import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" /*element=<></>*/ />
      <Route path="/product" /*element=<></>*/ />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default AppRoutes;
