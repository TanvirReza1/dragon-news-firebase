import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense
      fallback={<span className="loading loading-dots loading-xl"></span>}
    >
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  </StrictMode>
);
