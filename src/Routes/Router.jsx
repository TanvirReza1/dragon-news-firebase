import { createBrowserRouter } from "react-router";
import Home from "../Layouts/Home";
import House from "../Pages/House";
import CategoryNews from "../Pages/CategoryNews";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../Pages/Loading";

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
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/news.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
]);

export default router;
