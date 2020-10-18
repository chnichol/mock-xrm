import executeGet from "./utility/executeGet";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const retrieveMultiple = async (entityLogicalName, options = '', maxpagesize = '') => {
    let meta = await retrieveMetadataMemo(entityLogicalName);
    let result = await executeGet(`${meta.EntityMetadata.LogicalCollectionName}${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=${maxpagesize}` } : {});
    return result.json();
}

export default retrieveMultiple;