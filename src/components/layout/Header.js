import { NavLink } from "react-router-dom";
import { useState } from "react";
import {NavigationLink} from "../features/NavigationLink";
import {DarkModeToggle} from "../features/DarkModeToggle"; // Removed unnecessary import of useEffect

export const Header = () => {
    const [hidden, setHidden] = useState(false);

    const navigationLinks = [
        {id: 1, name:"Home", link:"/"},
        {id: 2, name:"Services", link:"/services"},
        {id: 3, name:"Pricing", link:"/pricing"},
        {id: 4, name:"Dogs", link:"/dogs"},
        {id: 5, name:"Contact", link:"/contact"}
    ]

    const toggleMenu = () => {
        setHidden((prevState) => !prevState);
    };

    return (
        <header>
            <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/" className="flex items-center">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8 mr-3"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span>
                    </NavLink>
                    <button
                        onClick={toggleMenu}
                        data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500
                            rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                            dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600`}
                        aria-controls="navbar-solid-bg"
                        aria-expanded={!hidden ? "true" : "false"} // Fixed aria-expanded attribute value
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            hidden ? "hidden" : ""
                        } w-full md:block md:w-auto`}
                        id="navbar-solid-bg"
                    >
                        <ul
                            className={`flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row
                        md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent
                        dark:border-gray-700`}
                        >

                            {/*rendering nav link*/}
                            {navigationLinks.map((navObject) => <NavigationLink nav={navObject}/>)}
                            <DarkModeToggle />

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
