import * as React from "react";


const Header = () => {
    return(
        <header className="w-full h-16 flex items-center">
            <nav className="w-full h-full flex justify-center items-center px-5">
                <p className="text-3xl font-semibold text-teal-500 uppercase">Gluzy</p>
            </nav>
        </header>
    )
}

export { Header };