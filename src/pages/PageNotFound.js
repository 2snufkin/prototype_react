import {Link} from "react-router-dom";
import {useTitle} from "../hooks/useTitle";

export const PageNotFound = ({title})=> {
    useTitle(title)
    const backgroundStyle = {
        // putting it in public will reduce bundle size. but for security i can not import from public
        // If you're using Create React App and the image is in the public directory,
        // you can use the process.env.PUBLIC_URL to reference it:
        backgroundImage:  `url(${process.env.PUBLIC_URL}/404.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <div style={backgroundStyle} className="min-h-screen flex flex-col  items-center">
            <div className="py-60 pl-12">
            <Link to="/">
                <button type="button"
                        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500
                        focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5
                        py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white
                         dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 text-xl">Homepage
                </button>

            </Link>

            </div>
        </div>
    );
};