import { useState, useEffect } from 'react';

// Custom Hook: useFetchWithParams
function useFetchWithParams(baseUrl, queryParams) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const queryParamsString = new URLSearchParams(queryParams).toString();
        const fetchUrl = `${baseUrl}${queryParamsString ? `?${queryParamsString}` : ''}`;

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(fetchUrl);
                const json = await response.json();
                setData(json);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };

        fetchData();
    }, [baseUrl, queryParams]);

    return { data, loading, error };
}

export default useFetchWithParams;
