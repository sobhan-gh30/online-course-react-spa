import {Outlet} from "react-router/internal/react-server-client";

export default function RootLayout() {
    return (
        <>
            <div>header</div>
            <br/><br/><hr/>

            <Outlet/>

            <br/><br/><hr/>
            <div>Fotteer</div>
        </>
    )
}