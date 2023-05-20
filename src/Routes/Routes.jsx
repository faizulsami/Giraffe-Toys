import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddAToy from "../Pages/Add A Toy/AddAToy";
import MyToys from "../Pages/My Toys/MyToys";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path:'addToy',
                element:<AddAToy></AddAToy>
            },
            {
                path:'myToys',
                element:<MyToys></MyToys>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    },
]);
export default router;