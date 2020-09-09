import executeDelete from "./utility/executeDelete";

const del = (entityLogicalName, id) => {
    return executeDelete(`/${entityLogicalName}s(${id})`)();
}

export default del;