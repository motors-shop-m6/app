import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" /*element=<></>*/ />
      <Route path="/product" /*element=<></>*/ />
    </Routes>
  );
}

export default AppRoutes;
