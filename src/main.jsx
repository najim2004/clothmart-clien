import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContextProvider } from "./Context/ContextProvider.jsx";
import { HelmetProvider as ReactHelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <ReactHelmetProvider>
          <RouterProvider router={router} />
        </ReactHelmetProvider>
      </ContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
