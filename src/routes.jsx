import {createBrowserRouter} from "react-router";
import RootLayout from "./components/Layouts/layouts.jsx";
import Home from "./pages/home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "/courses",
                element: <div>All Courses</div>
            },
            {
                path: "/courses/:category",
                element: <div>specific Courses</div>
            },
            {
                path: "/courses/:category/:id",
                element: <div>Course id</div>
            },
            {
                path: "*",
                element: <div>not Found</div>
            }
        ]

    }
])