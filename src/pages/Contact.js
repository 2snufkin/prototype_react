export const Contact =()=> {
    return (

        <div className="container mx-auto px-4 py-8">
            <div className="max-w-md mx-auto bg-white rounded p-8 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
                <form action="#" method="POST">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                        <input type="text" id="name" name="name"
                               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                               required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                        <input type="email" id="email" name="email"
                               className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                               required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                        <textarea id="message" name="message"
                                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                                  rows="4" required></textarea>
                    </div>
                    <div className="mb-6">
                        <button type="submit"
                                className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Send
                            Message
                        </button>
                    </div>
                </form>
                <div className="border-t pt-4 text-center text-gray-600">
                    <p>Address: 123 Main St, City, Country</p>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
            </div>
        </div>
    )
}