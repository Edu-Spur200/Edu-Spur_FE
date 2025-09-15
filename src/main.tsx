import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.tsx'
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter.tsx";
import { ToastContainer } from "react-toastify";

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={mainRouter} />
     <ToastContainer />
  </StrictMode>
);
