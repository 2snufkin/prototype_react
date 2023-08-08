/**
 * Fetches data from the specified API endpoint using the GET method.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise} A Promise that resolves with the fetched data.
 * @throws {Error} If the network response is not ok or an error occurs.
 */
export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

/**
 * Sends data to the specified API endpoint using the POST method.
 * @param {string} url - The URL of the API endpoint.
 * @param {object} data - The data to be sent in the request body.
 * @returns {Promise} A Promise that resolves with the response data.
 * @throws {Error} If the network response is not ok or an error occurs.
 */
export const sendData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Error sending data:', error);
        throw error;
    }
};

/**
 * Updates data at the specified API endpoint using the PUT method.
 * @param {string} url - The URL of the API endpoint.
 * @param {object} data - The updated data to be sent in the request body.
 * @returns {Promise} A Promise that resolves with the updated response data.
 * @throws {Error} If the network response is not ok or an error occurs.
 */
export const updateResource = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedData = await response.json();
        return updatedData;
    } catch (error) {
        console.error('Error updating resource:', error);
        throw error;
    }
};

/**
 * Deletes data at the specified API endpoint using the DELETE method.
 * @param {string} url - The URL of the API endpoint.
 * @returns {Promise} A Promise that resolves when the resource is successfully deleted.
 * @throws {Error} If the network response is not ok or an error occurs.
 */
export const deleteResource = async (url) => {
    try {
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        // No response data needed for delete operation
    } catch (error) {
        console.error('Error deleting resource:', error);
        throw error;
    }
};
