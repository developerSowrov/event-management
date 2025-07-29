import { createBrowserRouter } from "react-router-dom";
// import Card from "../components/card/card";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Login from "../pages/login/login";
import Registration from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";
import AddEvent from "../pages/add-product/AddProducts";
import MyEvent from "../pages/my-products/MyProducts";
import Event from "../pages/products/Products";
import UpdateEvent from "../pages/updateEvent/UpdateProduct";
import AddProducts from "../pages/add-product/AddProducts";
import Products from "../pages/products/Products";
import ProductDetails from "../pages/product-details/ProductDetails";
import MyProducts from "../pages/my-products/MyProducts";
import UpdateProduct from "../pages/updateEvent/UpdateProduct";
import CartPage from "../pages/cart/Cart";

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
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "/add-product",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-products",
        element: (
          <PrivateRoute>
            <MyProducts></MyProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/product-update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
      },
      {
  path: "/product/:id",
  element: (
    <PrivateRoute>
      <ProductDetails />
    </PrivateRoute>
  ),
},
      {
  path: "/cart",
  element: (
    <PrivateRoute>
      <CartPage></CartPage>
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
