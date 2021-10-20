import "./App.css";
import "../src/sass/main.scss";
import Routes from "./routes/Routes";
import axios from "axios";
import { ToastProvider } from "react-toast-notifications";
import Snack from "./components/custom-toast/Toast";
import {baseURL} from "../src/utils/base-url";

const  App =()=> {
  /**
   * setting axios this way to make the base url accessible globally in the whole app
   */
  axios.defaults.baseURL = baseURL;
  return (
      <ToastProvider
          autoDismiss
          components={{ Toast: Snack }}
          autoDismissTimeout={3000}
          placement="top-right"
      >
        <Routes/>
      </ToastProvider>
  );
};

export default App;
