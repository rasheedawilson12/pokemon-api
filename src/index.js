import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";
// ------------------------------------------{Routing}
import { BrowserRouter as Router } from "react-router-dom";
import AppContextProvider from "./context/AppContext";

ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <Router>
        <App />
      </Router>
    </AppContextProvider>
  </StrictMode>,

  document.getElementById("root")
);
