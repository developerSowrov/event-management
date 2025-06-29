import { createBrowserRouter } from "react-router-dom";
// import Card from "../components/card/card";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/event",
        element: <div>Event page</div>,
      },
      {
        path: "/add-event",
        element: <div>Add Event page</div>,
      },
      {
        path: "/my-event",
        element: <div>My Event page</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
