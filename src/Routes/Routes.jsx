import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import AddAToy from "../Pages/Add A Toy/AddAToy";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/My Toys/MyToys";
import View_Details from "../Pages/View Details/View_Details";
import UpdateToys from "../Pages/Update Toys/UpdateToys";

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
                path:'view_details/:id',
                element:<PrivateRoute><View_Details></View_Details></PrivateRoute>,
                loader:({params}) => fetch(`https://assignment-11-server-eight-eosin.vercel.app/allToys/${params.id}`)
            },
            {
                path:'update/:id',
                element:<UpdateToys></UpdateToys>,
                loader:({params}) => fetch(`https://assignment-11-server-eight-eosin.vercel.app/allToys/${params.id}`)
            },
            {
                path:'addToy',
                element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>
            },
            {
                path:'myToys',
                element:<PrivateRoute><MyToys></MyToys></PrivateRoute>,
                loader: () => fetch('https://assignment-11-server-eight-eosin.vercel.app/myToys')
            },
            {
                path:'allToys',
                element:<AllToys></AllToys>,
                loader: () => fetch('https://assignment-11-server-eight-eosin.vercel.app/allToys')
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