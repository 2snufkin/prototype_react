import useFetch from "../hooks/useFetch";
import Table from "../components/common/Table";

export const DogsPage = () => {
    const dogsAPI = "https://api.thedogapi.com/v1/breeds"
    const tableHeders = ["Name", "Lifespan", "Purpose", "Photo"]
    const {data, loading, error} = useFetch(dogsAPI);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>

    return  <Table headers={tableHeders} data={data} />

}
