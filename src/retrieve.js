import executeGet from "./utility/executeGet";
import retrieveMetadataWrapperMemo from './retrieveMetadataWrapperMemo';

const retrieve = async (entityLogicalName, id, options = '') => {
    let meta = await retrieveMetadataWrapperMemo(entityLogicalName);
    let result = await executeGet(`${meta.EntityMetadata.LogicalCollectionName}(${id})${options ? options : ''}`)();
    return result.json();
}

export default retrieve;