import executeGet from "./executeGet";

const retrieve = (entityLogicalName, id, options = '') => {
    return executeGet(`/${entityLogicalName}s(${id})${options ? options : ''}`)();
}

export default retrieve;