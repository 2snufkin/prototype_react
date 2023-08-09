import {useEffect, useState} from "react";

// when load get the dark mode from localstorage
export const DarkModeToggle = ()=> {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
    const moonIcon = "M12.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z";
    const sunIcon = "M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72l1.42-1.42M12 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6 6 6 0 0 1-6-6 6 6 0 0 1 6-6z";


    useEffect(() => {
         localStorage.setItem("darkMode", JSON.stringify(darkMode));
// Check if the 'darkMode' value in localStorage is explicitly set to 'true'
// or if the 'darkMode' key is not present in localStorage but the user's
// operating system or browser prefers dark mode based on the media query.
// If any of these conditions are true, enable dark mode.
    if (localStorage.darkMode === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

    }, [darkMode])

    return(
        <button className={`p2 rounded ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        onClick={()=> setDarkMode(!darkMode)}>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={darkMode ? moonIcon : sunIcon}
                />
            </svg>
        </button>

)

}
