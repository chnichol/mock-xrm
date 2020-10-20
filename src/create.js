import executePost from "./utility/executePost";
import retrieveMetadataMemo from './retrieveMetadataMemo';

const create = async (entityLogicalName, data) => {
    let meta = await retrieveMetadataMemo(entityLogicalName);
    let result = await executePost(data)(`/${meta.EntityMetadata.LogicalCollectionName}`)({'content-type': 'application/json', 'Prefer': 'return=representation'  });
    let json = await result.json();

    return Promise.resolve({entityType:entityLogicalName, id: json[meta.EntityMetadata.PrimaryIdAttribute]});
}

export default create;