import executePost from "./utility/executePost";

const execute = (request) => {
    let operationName = request.getMetadata().operationName;
    return executePost(request)(operationName)({'content-type': 'application/json'});
}

export default execute;