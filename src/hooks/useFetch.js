import {useEffect, useState} from "react";

/**
 * A custom hook for fetching data from an API.
 * @param {string} api - The API endpoint URL to fetch data from.
 * @returns {Object} An object containing the fetched data.
 */
const useFetch = (api)=> {
    const [data, setData] = useState([]);

    // Effect to fetch data when the API URL changes
    useEffect(() => {
        async function fetchAPI(apiString){
            try {
                const response = await fetch(apiString);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const json = await response.json();
                console.log(json)
                // setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
                throw error;
            }
        }
        // Call the fetchAPI function with the provided API URL
        fetchAPI(api);

    },[api])

    // Return the fetched data in an object you will access it with .data
    console.log(data)
    console.log({data})
    // return {data}

};

export default useFetch;
