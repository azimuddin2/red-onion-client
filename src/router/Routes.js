import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Foods from "../pages/Home/Foods/Foods";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/category/:id',
                element: <Home></Home>,
                loader: ({ params }) => {
                    return fetch(`http://localhost:5000/category/${params.id}`)
                }
            },
            // {
            //     path: '/category/:id',
            //     element: <Foods></Foods>,
            //     loader: ({ params }) => {
            //         return fetch(`http://localhost:5000/category/${params.id}`)
            //     }
            // }
        ]
    }
]);

export default router;