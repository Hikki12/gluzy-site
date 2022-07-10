import * as React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children }: LayoutProps) => {
    return(
        <>
        <Header />

        <main className="min-h-[90vh] overflow-x-hidden">
            {children}
        </main>

        <Footer />
        </>
    )
}

export { Layout };