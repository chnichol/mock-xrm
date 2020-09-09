import executeGet from "./utility/executeGet";

const retrieveMultiple = async (entityLogicalName, options = '', maxpagesize = '') => {
    let result = await executeGet(`/${entityLogicalName}s${options ? options : ''}`)(maxpagesize ? { prefer: `odata.include-annotations="*",odata.maxpagesize=3` } : {});
    return result.json();
}

export default retrieveMultiple;