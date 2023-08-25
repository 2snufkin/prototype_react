import {Routes, Route} from "react-router-dom";
import {PageNotFound, HomePage, Contact, PricingPage, ServicesPage} from "../pages"
import {DogsPage} from "../pages/DogsPage";

export const AllRoutes = ()=> {
    return (
        <>
            <Routes>
                {/*the title is for dynamic title in the tab. It only works with the DIY useTitle  hook*/}
                <Route path="/" end element={<HomePage title="Home"/>} />
                <Route path="/pricing" element={<PricingPage title="Pricing"/>} />
                <Route path="/contact" element={<Contact title="Contact" />} />
                <Route path="/services" element={<ServicesPage title="Services" />} />
                {/*you can pass data to the component, like the title name */}
                <Route path="/dogs" element={<DogsPage title="Dogs"/>} />
                <Route path="*" element={<PageNotFound title="404"/>} />
            </Routes>

        </>

    )
}


