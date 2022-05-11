import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap";

import App from "./App";
import { PriceContext } from "./components/Price/PriceConfiguration";

import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <PriceContext.Provider value={{ precision: 2, currency: "$ " }}>
            <App />
        </PriceContext.Provider>
    </BrowserRouter>
);
