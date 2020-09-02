import executeGet from "./executeGet";

const retrieveMultiple = (entityLogicalName, options = '', maxpagesize = '') => {
    return executeGet(`/${entityLogicalName}s${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=3` } : {});
}

export default retrieveMultiple;