import axios from "axios";

const sendPostRequest = async (url: string, formData) =>
    await axios.post(url, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
    })

export {
    sendPostRequest
}