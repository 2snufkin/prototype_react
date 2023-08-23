import TableHeader from "../shared/TableHeader";
import TableRows from "../shared/TableRows";

const Table = ({ headers, data }) => {
    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <TableHeader headers={headers} />
                <TableRows data={data} />
            </table>
        </div>
    );
};

export default Table;
