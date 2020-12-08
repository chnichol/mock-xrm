import executeGet from "./utility/executeGet";

const retrieveMetadata = (entitylogicalName, attributes = []) => executeGet(`RetrieveEntity(EntityFilters=Microsoft.Dynamics.CRM.EntityFilters'Attributes',LogicalName = '${entitylogicalName}',MetadataId=00000000-0000-0000-0000-000000000000,RetrieveAsIfPublished=false)`)({});

export default retrieveMetadata;