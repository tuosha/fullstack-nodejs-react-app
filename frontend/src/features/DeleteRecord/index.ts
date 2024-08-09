import useDeleteRequest from "./hooks/useDeleteRequest";
import {_basePostsUrl} from "../../../api/urls";
import {deletePost} from "./api/deleteRecordApi";

const {onHandleDelete, currentData, deleted, onDeleteError} = useDeleteRequest(data, _basePostsUrl, deletePost)
