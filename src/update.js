import executePatch from "./utility/executePatch";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const update = async (entityLogicalName, id, data) => {
    let meta = await retrieveMetadataMemo(entityLogicalName);
    await executePatch(data)(`/${meta.EntityMetadata.LogicalCollectionName}(${id})`)({ 'content-type': 'application/json' });

    return Promise.resolve({entityType: entityLogicalName, id: id});
}

export default update;