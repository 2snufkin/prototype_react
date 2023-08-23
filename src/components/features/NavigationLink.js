import {NavLink} from "react-router-dom";

export const NavigationLink = ( {nav}) => {

    const activeLink =
        "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent";
    const inactiveLink =
        "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

    return(
        <li>
            <NavLink
                to={nav.link}
                className={ ({isActive}) => isActive? activeLink : inactiveLink}
            >
                {nav.name}
            </NavLink>
        </li>
    )
}
