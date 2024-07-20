import DeleteButton from "../../../shared/ui/Buttons/DeleteButton";
import useDeleteRequest from "../hooks/useDeleteRequest";
import {_basePostsUrl} from "../../../../api/urls";
import {deleteRecord} from "../api/deleteRecordApi";

const DeleteRecord = (data) => {
    const {onHandleDelete, currentData, deleted, onDeleteError} = useDeleteRequest(data, _basePostsUrl, deleteRecord)
    return <DeleteButton
        onHandleDelete={onHandleDelete}
        text='Delete BTN'
    />
}

export default DeleteRecord