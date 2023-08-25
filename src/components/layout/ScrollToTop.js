import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component doesn't render any visible content; it's purely for behavior.
// This component ensures that the user is scrolled to the top of the page
// whenever they navigate to a new route within a single-page application.

export default function ScrollToTop() {
    const { pathname } = useLocation();

    // Use the useEffect hook to execute the scrolling behavior
    // when the pathname (route) changes.
    useEffect(() => {
        // Scroll the browser window to the top of the page (y = 0).
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}
