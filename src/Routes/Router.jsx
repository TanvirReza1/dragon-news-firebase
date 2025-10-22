import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import House from "../Pages/House";
import CategoryNews from "../Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "/",
        Component: House,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News layout</h2>,
  },
  {
    path: "/auth",
    element: <h2>Authentication layout</h2>,
  },
  {
    path: "/*",
    element: <h2>error404</h2>,
  },
]);

export default router;
