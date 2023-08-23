import {Routes, Route} from "react-router-dom";
import {PageNotFound, HomePage, Contact, PricingPage, ServicesPage} from "../pages"
import {DogsPage} from "../pages/DogsPage";

export const AllRoutes = ()=> {
    return (
        <>
            <Routes>
                <Route path="/" end element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<ServicesPage />} />
                {/*you can pass data to the component*/}
                <Route path="/dogs" element={<DogsPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>

    )
}


