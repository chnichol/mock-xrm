import executeGet from "./utility/executeGet";

const retrieveMetadata = async (options = '') => {
    let result = await executeGet(`EntityDefinitions${options ? options : ''}`)({});
    return result.json();
}

export default retrieveMetadata;