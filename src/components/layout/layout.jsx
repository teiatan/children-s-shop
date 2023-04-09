import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Footer } from "../Footer/Footer";
import { Theme } from "context/theme";
import { ThemeProvider } from "@emotion/react";
import { Outlet } from "react-router-dom";

export function Layout() {
    
    const theme = Theme();

    return (
        <ThemeProvider theme={theme}>
            <Header />

            <Main>
                <Outlet />
            </Main>
        
            <Footer />
        </ThemeProvider>
    )
}