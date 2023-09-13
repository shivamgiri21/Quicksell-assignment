import axios from "axios"

const makeGETRequest = async (url) => {
    const response = await axios.get(url);
    return response.data;
}


export { makeGETRequest };