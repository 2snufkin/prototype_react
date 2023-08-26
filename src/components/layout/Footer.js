export const Footer = () => {
    return (
        <footer className="bottom-0 w-full">

            <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        {/*you may want to have an <a> element instead of a button. it was made a button to
                        avoid an empty href attribute that cause errors in the build and may prevent deployment*/}
                        <li>
                            <button  className="mr-4 hover:underline md:mr-6">About</button>
                        </li>
                        <li>
                            <button   className="mr-4 hover:underline md:mr-6">Privacy Policy</button>
                        </li>
                        <li>
                            <button   className="mr-4 hover:underline md:mr-6">Licensing</button>
                        </li>
                        <li>
                            <button   className="hover:underline">Contact</button>
                        </li>
                    </ul>
                </div>
            </footer>

        </footer>
    )
}
