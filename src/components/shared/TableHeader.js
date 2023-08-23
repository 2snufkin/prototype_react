const TableHeader = (props) => {

    return (
        <thead
            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {
                props.headers.map((header) => {
                    return (  <th key={header} scope="col" className="px-6 py-3"> {header} </th>)

                })
            }
        </tr>
        </thead>


    )

}
export default TableHeader;
