import {Outlet} from "react-router/internal/react-server-client";
import Header from "../commons/Header.jsx";
import Footer from "../commons/fotter.jsx";

export default function RootLayout() {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}