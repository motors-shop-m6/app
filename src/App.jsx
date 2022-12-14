import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/pallete";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

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
        theme="light"
        transition={Slide}
      />
      <div>
        <div></div>
      </div>
    </ThemeProvider>
  );
}

export default App;
