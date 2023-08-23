import useFetch from "../hooks/useFetch";
import Table from "../components/common/Table";
import Spinner from "../components/shared/Spinner";

export const DogsPage = () => {
    const dogsAPI = "https://api.thedogapi.com/v1/breeds"
    const tableHeders = ["Name", "Lifespan", "Purpose", "temperament"]
    const {data, loading, error} = useFetch(dogsAPI);

    if (loading) return <Spinner />
    if (error) return <div>Error!</div>

    return  <Table headers={tableHeders} data={data} />

}
