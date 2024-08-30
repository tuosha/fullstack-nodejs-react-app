import ItemList from '../../entites/ItemsList'
import useGetRequest from '../../shared/hooks/useGetRequest'
import {_basePostsUrl} from '../../../api/urls'
import {getAllPosts} from '../../../api/api'
import UpdateRecordsList from "../UpdateRecordsList/UpdateRecordsList";

const PlannedBooksList = () => {
    const {data, loaded, error} = useGetRequest(_basePostsUrl, getAllPosts)
    const i =1
    return (
        <>
            <ItemList
                data={data}
                loaded={loaded}
                error={error}
            />
            <UpdateRecordsList
                data={data}
            />
        </>
    )

}

export default PlannedBooksList