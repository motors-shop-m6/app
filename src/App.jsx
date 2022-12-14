import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/pallete";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import AppRoutes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={1}
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
