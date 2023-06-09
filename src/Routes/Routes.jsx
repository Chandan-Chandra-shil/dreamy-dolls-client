import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToys from "../Pages/AddAToys/AddAToys";
import Blog from "../Pages/Blog/Blog";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    
    element: <Main></Main>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys/",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addAToys",
        element: (
          <PrivateRoute>
            <AddAToys></AddAToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/singleToyDetail/:id",
        element: (
          <PrivateRoute>
            <SingleToyDetails></SingleToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dreamy-dolls-server.vercel.app/all-toys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://dreamy-dolls-server.vercel.app/all-toys/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
     
    ],
  },
]);

export default router;
