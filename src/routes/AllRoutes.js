import {Routes, Route} from "react-router-dom";
import {PageNotFound, HomePage, Contact, PricingPage, ServicesPage} from "../pages"

export const AllRoutes = ()=> {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </>

    )
}


