import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from 'react-router-dom'

import React from "react";
import StoreContextProvider from "./context/StoreContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <StoreContextProvider>
    <App />
  </StoreContextProvider>
  </BrowserRouter>   
);
