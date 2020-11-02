import executeGet from "./utility/executeGet";
import retrieveMetadataMemo from './retrieveMetadataWrapperMemo';

const retrieve = async (entityLogicalName, id, options = '') => {
    let meta = await retrieveMetadataMemo(entityLogicalName);
    let result = await executeGet(`${meta.EntityMetadata.LogicalCollectionName}(${id})${options ? options : ''}`)();
    return result.json();
}

export default retrieve;