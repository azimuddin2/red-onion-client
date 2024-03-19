import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Foods from "../pages/Home/FoodSection/Foods/Foods";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";
import Carts from "../pages/CartRelated/Carts/Carts";
import PlaceOrder from "../pages/PlaceOrder/PlaceOrder";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/food/:category',
                element: <Foods></Foods>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            },
            {
                path: 'cart',
                element: <PrivateRoute>
                    <Carts></Carts>
                </PrivateRoute>
            },
            {
                path: 'place-order',
                element: <PrivateRoute>
                    <PlaceOrder></PlaceOrder>
                </PrivateRoute>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
]);

export default router;