import useFetch from "../hooks/useFetch";

export const DogsPage = ()=> {
    const dogsAPI = "https://api.thedogapi.com/v1/breeds"

    // const  dogs =  useFetch(dogsAPI);

    const { data, loading, error } = useFetch(dogsAPI);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>

        return (
            <main>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Dog name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Life Span
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Breed Group
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bred For
                            </th>
                        </tr>
                        </thead>
                        <tbody>

                        {data.map((dog) => {
                            return (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={dog.id}>
                                    <th scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {dog.name}
                                    </th>
                                    <td className="px-6 py-4">
                                        {dog.life_span}
                                    </td>
                                    <td className="px-6 py-4">
                                        {dog.breed_group}
                                    </td>
                                    <td>
                                        <img
                                            src={dog.image.url}
                                            alt={dog.name}
                                            className="h-auto w-auto max-h-[4em] max-w-[4em] transition-transform transform-gpu hover:scale-110" />
                                    </td>


                                </tr>
                            )
                        })}


                                               </tbody>
                    </table>
                </div>


            </main>

        )

}
