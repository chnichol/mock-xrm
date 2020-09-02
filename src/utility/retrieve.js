const retrieve = (entityLogicalName, id, options = '') => {
    return fetch(`/api/data/v9.0/${entityLogicalName}s(${id})/${options}`);
}

export default retrieve;