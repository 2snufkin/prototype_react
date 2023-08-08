import useFetch from "../hooks/useFetch";
import {useEffect, useState} from "react";
import {fetchData} from "../utilities/api";

export const DogsPage = ()=> {
    const dogsAPI = "https://api.thedogapi.com/v1/breeds"

    // const  dogs =  useFetch(dogsAPI);

    const [dogs, setDogs] = useState([]);

    useEffect(() => {
        fetchData(dogsAPI).then((data)=> {
            setDogs(data)
        })
    },[])

    return(
        <main>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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

                    {dogs.map((dog)=> {
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
                                <td className="px-6 py-4">
                                    {dog.bred_for}
                                </td>
                            </tr>
                        )
                    })}


                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4">
                            $99
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>


        </main>
    )
}
