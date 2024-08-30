import DeleteButton from "../../../shared/ui/Buttons/DeleteButton";
import useDeleteRequest from "../hooks/useDeleteRequest";
import {_basePostsUrl} from "../../../../api/urls";
import {deleteRecord} from "../api/deleteRecordApi";

const DeleteRecord = (data) => {
    const {onHandleDelete, currentData, deleted, onDeleteError} = useDeleteRequest(data, _basePostsUrl, deleteRecord)
    return <button onClick={onHandleDelete}>delete</button>
}

export default DeleteRecord