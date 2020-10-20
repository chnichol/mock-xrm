import executeDelete from "./utility/executeDelete";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const del = async (entityLogicalName, id) => {
    let meta = await retrieveMetadataMemo(entityLogicalName);
    let result = await executeDelete(`/${meta.EntityMetadata.LogicalCollectionName}(${id})`)();

    return Promise.resolve({entityType: entityLogicalName, id: id});
}

export default del;