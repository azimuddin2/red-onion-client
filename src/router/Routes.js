import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Foods from "../pages/Home/FoodSection/Foods/Foods";

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
            }
        ]
    }
]);

export default router;