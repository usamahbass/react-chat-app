import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes/routes";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import * as serviceWorker from "./serviceWorker"
import "./style/bootstrap.css";

ReactDOM.render(<Routes />, document.getElementById("root"));
