import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles.jsx";
import "./i18n.js";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>
);
