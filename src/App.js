import "./App.css";
import "../src/sass/main.scss";
import Routes from "./routes/Routes";
import axios from "axios";
import {baseURL} from "../src/utils/base-url";

const  App =()=> {
  /**
   * setting axios this way to make the base url accessible globally in the whole app
   */
  axios.defaults.baseURL = baseURL;
  return (
        <Routes/>
  );
};

export default App;
