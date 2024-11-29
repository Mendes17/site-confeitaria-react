import {Outlet, useNavigate} from "react-router-dom";
import Header from '../components/Header/Header2'
import Footer from '../components/Footer/Footer'
import {ClerkProvider} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

function Layout() {

    const navigate = useNavigate()

    return (
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} routerPush={(to) => navigate(to)}
                       routerReplace={(to) => navigate(to, {replace: true})}>
            <div id="container">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </ClerkProvider>
    );
}

export default Layout;