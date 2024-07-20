import axios from "axios";

const deleteRecord = async (url: string, id: string) => {
    const res = await axios.delete(url + '/' + id)
    if (res.status !== 200) {
        throw new Error(
            'Can\'t get data from server: ' + res.status + ' ' + res.statusText)
    }
    return res.data
}

export {deleteRecord}