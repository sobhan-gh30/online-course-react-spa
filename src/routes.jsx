import {createBrowserRouter} from "react-router";
import {Outlet} from "react-router/internal/react-server-client";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                home
                <br/><hr/>
                <Outlet/>
            </div>
        ),
        children:[
            {
                index: true,
                element: <div>index page</div>
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