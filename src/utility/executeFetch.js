import { WEBAPI } from '../consts';

const executeFetch = method => data => action => headers => {
    return fetch(`${WEBAPI}/${action}`, {
        headers: {
            ...headers
        },
        method: method,
        body: data && JSON.stringify(data)
    });
}

export default executeFetch;