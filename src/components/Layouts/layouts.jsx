import {Outlet} from "react-router/internal/react-server-client";
import Header from "../commons/Header.jsx";
import Footer from "../commons/fotter.jsx";
import {useMatches} from "react-router";

export default function RootLayout() {
    const matches = useMatches()
    const hideFooter = !matches.some((match)=>match.handle?.hideFooter)
    console.log(hideFooter)

    return (
        <>
            <Header/>
            <Outlet/>
            {
                hideFooter&&<Footer/>
            }
        </>
    )
}