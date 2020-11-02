import executeGet from "./utility/executeGet";

const retrieveMultiple = (options = '', maxpagesize = '') => async ({EntityMetadata}) => executeGet(`${EntityMetadata.LogicalCollectionName}${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=${maxpagesize}` } : {});

export default retrieveMultiple;