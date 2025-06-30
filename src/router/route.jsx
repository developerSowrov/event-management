import { createBrowserRouter } from "react-router-dom";
// import Card from "../components/card/card";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import Registration from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../pages/add-event/AddEvent";
import MyEvent from "../pages/my-event/MyEvent";
import Event from "../pages/events/Events";

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
        path: "/events",
        element: (
          <PrivateRoute>
            <Event></Event>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-event",
        element: (
          <PrivateRoute>
            <AddEvent></AddEvent>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-event",
        element: (
          <PrivateRoute>
            <MyEvent></MyEvent>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
]);
