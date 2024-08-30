import React from 'react';
import {DeleteRecord} from "../../features/DeleteRecord";
// interface IUpdateProps {
//
// }
const UpdateRecordsList = (data) => {
    return (
        <>
            <DeleteRecord
                data={data}
            />
            {/*<UpdateRecord/>*/}
            {/*<MoveRecordToArchive/>*/}
            {/*<RateRecord/>*/}
        </>
    );
};

export default UpdateRecordsList;