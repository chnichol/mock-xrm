import executeGet from "./executeGet";

const retrieve = async (entityLogicalName, id, options = '') => {
    let result = await executeGet(`/${entityLogicalName}s(${id})${options ? options : ''}`)();
    return result.json();
}

export default retrieve;