import {createBrowserRouter} from "react-router";
import RootLayout from "./components/Layouts/layouts.jsx";
import Home from "./pages/home.jsx";
import Courses from "./pages/courses.jsx";
import Categories from "./pages/categories.jsx";
import CoursePage from "./pages/coursePage.jsx";
import NotFound from "./pages/notFound.jsx";

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
                element: <Courses/>
            },
            {
                path: "/courses/:category",
                element: <Categories/>
            },
            {
                path: "/courses/:category/:id",
                element: <CoursePage/>
            },
            {
                path: "*",
                element: <NotFound/>,
                handle: {hideFooter: true},
            }
        ]

    }
])