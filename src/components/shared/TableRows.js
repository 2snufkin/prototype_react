const TableRows = (props) => {
    const data = props.data
    return (
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
                            className="h-auto w-auto max-h-[4em] max-w-[4em] transition-transform transform-gpu hover:scale-110"/>
                    </td>


                </tr>
            )
        })}


        </tbody>

    )

}
export default TableRows;
