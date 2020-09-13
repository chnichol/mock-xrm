import executeGet from "./utility/executeGet";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const retrieveMultiple = async (entityLogicalName, options = '', maxpagesize = '') => {
    let allMeta = await retrieveMetadataMemo('?$select=LogicalName,LogicalCollectionName');
    let meta = allMeta.value.find((v) => v.LogicalName === entityLogicalName);
    let result = await executeGet(`${meta.LogicalCollectionName}${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=${maxpagesize}` } : {});
    return result.json();
}

export default retrieveMultiple;