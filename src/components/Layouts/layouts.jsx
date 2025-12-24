import {Outlet} from "react-router/internal/react-server-client";
import Header from "../commons/Header.jsx";

export default function RootLayout() {
    return (
        <>
            <Header/>

            <Outlet/>

            <br/><br/><hr/>
            <div>Fotteer</div>
        </>
    )
}