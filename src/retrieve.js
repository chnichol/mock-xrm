import executeGet from "./utility/executeGet";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const retrieve = async (entityLogicalName, id, options = '') => {
    let allMeta = await retrieveMetadataMemo('?$select=LogicalName,LogicalCollectionName');
    let meta = allMeta.value.find((v) => v.LogicalName === entityLogicalName);
    let result = await executeGet(`${meta.LogicalCollectionName}(${id})${options ? options : ''}`)();
    return result.json();
}

export default retrieve;