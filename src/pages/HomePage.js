import ServicesPage from "./ServicesPage";
import {useTitle} from "../hooks/useTitle";

export const HomePage = ({title}) => {
    useTitle(title)

    return (
            <div
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center">
                <div className="max-w-5xl mx-auto p-6">
                    <div className="flex items-center justify-center md:justify-start space-x-6">
                        <div className="text-white">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
                            <p className="text-lg md:text-xl mb-6">We provide amazing services that will exceed your
                                expectations.</p>
                            <div className="flex space-x-4">
                                <button
                                    className="px-6 py-3 bg-white text-blue-500 font-semibold rounded hover:bg-blue-500 hover:text-white transition duration-300">Learn
                                    More
                                </button>
                                <button
                                    className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded hover:bg-white hover:text-blue-500 transition duration-300">Contact
                                    Us
                                </button>
                            </div>
                        </div>
                        <div className="hidden md:block w-1/2">
                            <img src="https://via.placeholder.com/400" alt="Hero"
                                 className="rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>

            </div>
        )
}
